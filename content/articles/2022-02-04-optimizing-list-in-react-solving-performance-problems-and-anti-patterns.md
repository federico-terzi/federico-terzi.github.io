---
layout: post
title:  "Optimizing Lists in React - Solving Performance Problems and Anti-patterns"
author: Federico Terzi
date:   2022-02-04
categories: react list performance optimizations patterns anti-patterns
social_title: "Optimizing Lists in React"
social_subtitle: "Solving Performance Problems and Anti-patterns"
---

React is the most popular front-end framework, and that’s for a reason. Besides being funded by one of the largest companies on the planet, it’s also built around a few key concepts (one-way data flow, immutable data, functional components, hooks) that make it easier than ever to create robust applications. That said, it’s not without pitfalls.

<!--more-->

It’s easy to write inefficient code in React, with useless re-renders being the common enemy. Usually, you start from a simple application and gradually build features on top of it. At first, the application is small enough to make the inefficiencies unnoticeable, but as the complexity grows, so does the component hierarchy, and thus, the number of re-renders. Then, once the application speed becomes unbearable (according to your standards), you start profiling and optimizing the problematic areas.

In this article, we are going to discuss the optimization process for lists, which are notorious sources of performance problems in React. Most of these techniques apply to both React and React Native applications.

# Starting from a problematic example

We’ll start from a problematic example and gradually discuss the process of identifying and solving the different issues.   

![Problematic List example](/posts/react-list/react_list_example.gif)

The proposed example is a simple list of selectable items, with a few performance problems. Clicking on an item toggles the selection status, but the operation is visibly laggy. Our goal is to make the selection feel snappy. You can find the complete code as follows (a [Codesandbox](https://codesandbox.io/s/commonreactlistmistakes-9f3ex) is also available). 

```jsx
import { useState } from "react";

// Create mock data with elements containing increasing items
const data = new Array(100)
  .fill()
  .map((_, i) => i + 1)
  .map((n) => ({
    id: n,
    name: `Item ${n}`
  }));

export default function App() {
  // An array containing the selected items
  const [selected, setSelected] = useState([]);

  // Select or unselect the given item
  const toggleItem = (item) => {
    if (!selected.includes(item)) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((current) => current !== item));
    }
  };

  return (
    <div className="App">
      <h1>List Example</h1>
      <List data={data} selectedItems={selected} toggleItem={toggleItem} />
    </div>
  );
}

const List = ({ data, selectedItems, toggleItem }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem
          name={item.name}
          selected={selectedItems.includes(item)}
          onClick={() => toggleItem(item)}
        />
      ))}
    </ul>
  );
};

const ListItem = ({ name, selected, onClick }) => {
  // Run an expensive operation to simulate a load
  // In real-world JS applications, this could be either a custom
  // JS elaboration or a complex render.
  expensiveOperation(selected);

  return (
    <li
      style={selected ? { textDecoration: "line-through" } : undefined}
      onClick={onClick}
    >
      {name}
    </li>
  );
};

// This is an example of an expensive JS operation that we might
// execute in the render function to simulate a load.
// In real-world applications, this operation could be either a custom
// JS elaboration or just a complex render
const expensiveOperation = (selected) => {
  // Here we use selected just because we want to simulate
  // an operation that depends on the props
  let total = selected ? 1 : 0;
  for (let i = 0; i < 200000; i++) {
    total += Math.random();
  }
  return total;
};

```

> If you want to practice, feel free to pause reading and try to spot the problems yourself first

Let’s dive into the analysis.

# Missing key prop

The first thing we can notice from the console is that we are not passing the `key` prop when rendering the list items.

![Missing key prop warning](/posts/react-list/missing_key_prop.png)

which is caused by this code:

```jsx
{data.map((item) => (
  <ListItem
    name={item.name}
    selected={selectedItems.includes(item)}
    onClick={() => toggleItem(item)}
  />
))}
```
  
As you might already know, the `key` prop is critical for dynamic lists to work correctly in React, as it helps the framework identify which items have changed, are added, or are removed.  

A common beginners’ anti-pattern is to solve the problem by passing the item’s index:  

```jsx
{data.map((item, index) => (
  <ListItem
    key={index}
    name={item.name}
    selected={selectedItems.includes(item)}
    onClick={() => toggleItem(item)}
  />
))}
```

Despite working for simple use-cases, this approach leads to multiple unexpected behaviors when the list is dynamic, with items being added or removed. For example, if you delete an item in the middle of a list at index N, then all list items located at positions N+1 will now have a different key. That causes React to “confuse” which mapped component belongs to which items. If you want to know more about the potential pitfalls of using the index as key, [this article](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318) is a great resource.

Therefore, you should specify a key prop with something that uniquely identifies the item being rendered. If the data you’re receiving is coming from a backend, you might be able to use the database’s unique id as key. Otherwise, you could generate a client-side random id with [nanoid](https://www.npmjs.com/package/nanoid) when creating the items.

Luckily, each of our own items has it’s own id property, so we should handle it as follows:

```jsx
{data.map((item) => (
  <ListItem
    key={item.id}
    name={item.name}
    selected={selectedItems.includes(item)}
    onClick={() => toggleItem(item)}
  />
))}
```

Adding the key solves the previous warning, but we still have a significant lag when selecting an item. It’s time to go serious and open the profiler.

# Profiling the list

Now that we solved the `key` warning, we are ready to tackle the performance problem. At this stage, using a profiler can help to track down the slow areas and therefore guide our optimization, so that’s what we are going to do.   

When working with React, there are two main profilers you can use: the browser’s built-in profiler, such as the one available inside Chrome’s Dev Tools, and the profiler provided by the React DevTools extension. Both of them are useful in different scenarios. From my experience, the React DevTools’ profiler is a good starting point, as it gives you a component-aware performance representation, which is helpful to track down the specific components that are causing problems, whereas the browser’s profiler works at a lower level and it’s mostly helpful in those cases where the performance problems are not directly related to a component, for example, due to a slow method or Redux reducer.

For this reason, we are going to start with the React DevTools’ profiler, so make sure to have the extension installed. Then, you can access the Profiler tool from Chrome’s dev tools > Profiler. Before starting, we are going to set up two settings that will help us in the optimization process:

-   In Chrome’s Performance tab, set CPU throttling to x6. That will simulate a slower CPU, making slowdowns much more evident.

![CPU throttling](/posts/react-list/profiler_cpu_throttle.png)
-   In React DevTools Profiler tab, click on the Gear icon > Profiler > “Record why each component rendered while profiling”. This will help us track down the causes for useless re-renders.

![React profiler settings](/posts/react-list/react_profile_settings.png)

Once the configuration is done, we are ready to profile our sample todo app. Go ahead and click on the Record button, then select some items in the list and, finally, hit stop recording. This is the result we obtain after selecting 3 items:

![React profiler results](/posts/react-list/react_app_profiler_result.png)

On the top right side, you see highlighted in red the commits, which, in short, are the renders that caused the DOM to update. As you can see, the current commit took 2671 milliseconds to render. By hovering on the various elements, we can tell that most of the time is spent rendering the list items, with an average of 26 milliseconds per item.

Spending 26 milliseconds rendering a single item is not inherently bad. As long as the entire operation takes less than 100ms, the action would still be perceived as snappy by the user. Our biggest problem is that selecting a single item causes all the items to be re-rendered, and that’s what we are going to tackle in the next section.

> A question we should ask ourselves at this point is: what’s the expected number of items to re-render after an action? In this particular case, the answer is one, as the result of a click is a new item being selected, with none of the others being affected. Another scenario might be a single-selection list, where at most one item could be selected at any given time. In that case, clicking on an item should cause the re-render of two items, as we need to render both the selected one and the one being unselected.

# Preventing re-renders with React.memo

In the previous section, we discussed how selecting a single item causes the entire list to be re-rendered.
Ideally, we would like to re-render only the items whose "looks" are affected by the new selection.
We can do that using the [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) higher-order component.

In a nutshell, `React.memo` compares the new props with the old ones and, if they are equal, it reuses the previous render. 
Otherwise, if the props are different, it re-renders the component.
It's important to note that React executes a **shallow comparison** of the props, which must be taken
into account when passing objects and methods as props.
You can also override the comparison function, though I would advise against it, as it makes
the code less maintainable (more on this later).

Now that we know the basics of `React.memo`, let's create another component by wrapping the `ListItem` with it:

```jsx
import { memo } from "react";

const MemoizedListItem = memo(ListItem);
```

We can now use `MemoizedListItem` instead of `ListItem` in the list:

```jsx
  {data.map((item) => (
	<MemoizedListItem
	  key={item.id}
	  name={item.name}
	  selected={selectedItems.includes(item)}
	  onClick={() => toggleItem(item)}
	/>
  ))}
```

Nice! We now have memoized the `ListItem`. If you go ahead and try the application, you'll notice something is wrong...
The application is still slow!

If we open up the profiler as we previously did and record a selection, we should be presented with something like the following:

![React profiler after memoizing](/posts/react-list/react_app_memoized_profiler.png)

As you can see, **we are still re-rendering all the items**! Why is it happening?
If you hover on one of the list items, you'll see the "Why did this render?" section. In our case, it says `Props changed: (onClick)`,
which means our items are re-rendering due to the `onClick` callback we are passing to each item.

As we previously discussed, `React.memo` does a _shallow comparison_ of the props by default.
Which basically means calling the strick equality operator `===` over each prop. In our case, the check would
be roughly equivalent to:

```js
function arePropsEqual(prevProps, nextProps) {
  return prevProps.name === nextProps.name &&
         prevProps.selected === nextProps.selected &&
         prevProps.onClick === nextProps.onClick
}
```

While `name` and `selected` are compared by _value_ (because they are primitive types, string and boolean respectively), `onClick` is compared
by _reference_ (being a function). 
When we created the list items, we passed the `onClick` callback as an anonymous closure:

```jsx
onClick={() => toggleItem(item)}
```

Every time the list re-renders, **each item receives a new callback function**. 
From an equality perspective, the callback _has changed_, and therefore the `MemoizedListItem` is re-rendered.

> If the equality aspect is still unclear to you, go ahead and open the JS console inside your browser.
> If you type `true === true`, you'll notice that the result is `true`.
> But if you type `(() => {}) === (() => {})`, you'll get `false` as result.
> That's because two functions are equal only if they share the same identity, and
> every time we create a new closure we generate a new identity.

Therefore, we need a way to keep the identity of the `onClick` callback stable to prevent useless re-renders,
and that's what we are going to discuss in the next sections.

## A common anti-pattern

Before discussing the proposed solution, let's analyze a common (anti-)pattern being used in these cases.
Given that the `React.memo` method accepts a custom comparator, you might be tempted to provide one that
artifically _excludes_ `onClick` from the check. Something like the following:

```jsx
const MemoizedListItem = memo(
  ListItem,
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name &&
    prevProps.selected === nextProps.selected
	// The onClick prop is not compared
);
```

In this case, even with a changing `onClick` callback, the list items won't be re-rendered unless `name` or `selected` are updated.
If you go ahead and try this approach, you'll notice the list feels snappy now, but something is wrong:

![React list custom comparator](/posts/react-list/react_list_example_custom_comparator.gif)

As you can see, selecting multiple items doesn't work as expected now, with items being randomly selected and unselected.
This is happening because the **`toggleItem` function is not pure**, as it depends on the previous value of the `selected` items.
If you exclude the `onClick` callback check from the `React.memo` comparator, then your components might receive an outdated (stale)
version of the callback, causing all those glitches.

In this particular case, the way the `toggleItem` is implemented is not optimal and we can easily convert it to a pure function
(in fact, we are going to do that in the next section). But my point here is: **by excluding the `onClick` callback from the `memo`
comparator, you're exposing the application to subtle staleness bugs**. 

Some might argue that as long as the `onClick` callback is kept _pure_, then this approach is perfectly acceptable.
Personally, I consider this an anti-pattern for two reasons:
* In complex codebases is relatively easy to transform a pure function into a non-pure one by mistake.
* By writing a custom comparator,  you're creating an additional maintenance burden. What if the `ListItem` needs to accept another `color` parameter in the future?
Then, you'll need to refactor to the comparator, as shown below. If you forget to add it (which is relatively easy in complex codebases with multiple contributors), then you are again exposing your component to staleness bugs.

```jsx
const MemoizedListItem = memo(
  ListItem,
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name &&
    prevProps.selected === nextProps.selected &&
    prevProps.color === nextProps.color
);
```

If a custom comparator is not advisable, what should we do to solve this problem then?

# Making callback identities stable
Our goal is to use the "base" version of `React.memo` without a custom comparator.
Choosing this path will both improve the maintainability of the component and its robustness against future changes.
For the memoization to work correctly though, we'll need to **refactor the callback to keep its identity stable**, otherwise
the equality check performed by `React.memo` will prevent the memoization.

The traditional way to keep function identities stable in React is to use the `useCallback` hook.
The hook accepts a function and a dependency array, and as long as the dependencies won't change, neither will the identity of the callback.
Let's refactor our example to use `useCallback`:

Our first attempt is to move the anonymous closure `() => toggleItem(item)` inside a separate method inside `useCallback`:

```jsx
const List = ({ data, selectedItems, toggleItem }) => {
  const handleClick = useCallback(() => {
    toggleItem(??????) // How do we get the item?
  }, [toggleItem])

  return (
    <ul>
      {data.map((item) => (
        <MemoizedListItem
          key={item.id}
          name={item.name}
          selected={selectedItems.includes(item)}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
};
```

We are now facing a problem: previously, the anonymous closure captured the current `item` in the `.map` iteration and then passed it to the `toggleItem` 
function as an argument. But now, we are not declaring the `handleClick` handler inside the iteration, so how can we access the "selected item" in the callback?
Let's discuss a possible solution:

## Refactoring the ListItem component
Currently, the `ListItem`'s `onClick` callback doesn't provide any information about the item being selected.
If it did, we would be able to easily solve this problem, so let's refactor the `ListItem` and `List` components to provide this information.

Firstly, we change the `ListItem` component to accept the full `item` object, and given that the `name` prop is now redundant we remove it.
Then, we introduce an handler for the `onClick` event to also provide the `item` as argument. This is our end result:

```jsx
const ListItem = ({ item, selected, onClick }) => {
  // Run an expensive operation to simulate a load
  // In real-world JS applications, this could be either a custom
  // JS elaboration or a complex render.
  expensiveOperation(selected);

  return (
    <li
      style={selected ? { textDecoration: "line-through" } : undefined}
      onClick={() => onClick(item)}
    >
      {item.name}
    </li>
  );
};
```

As you can see, the `onClick` now provides the current item as a parameter. 

> But wait! You used an anonymous closure again in the `li`'s `onClick` handler, shouldn't we avoid them to prevent re-renderings?
> While we _could_ create another memoized callback with `useCallback` inside the `ListItem` component to handle the click event, that would offer no performance improvements in this case.
> The problem with the anonymous closure we discussed earlier in the `List` item was that it broke the `React.memo` memoization for the `MemoizedListItem`. Given that we are _not_ memoizing the `li` element, then there is no performance benefit from having a stable identity for this callback.

We can then refactor the `List` component to pass the `item` prop instead of `name` and to make use of the newly available `item` information in the `handleClick` callback:

```jsx
const List = ({ data, selectedItems, toggleItem }) => {
  const handleClick = useCallback(
    (item) => {  // We now receive the selected item
      toggleItem(item);
    },
    [toggleItem]
  );

  return (
    <ul>
      {data.map((item) => (
        <MemoizedListItem
          key={item.id}
          item={item}  // We pass the full item instead of the name
          selected={selectedItems.includes(item)}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
};
```

Nice! Let's go ahead and try the refactored version:

![React list example, after changes](/posts/react-list/react_list_example_2.gif)

It works... but it's still slow! If we open up the profiler, we can see the whole list is still being rendered:

![Profiler results after changes](/posts/react-list/react_list_perf.png)

As you can see from the profiler, the `onClick` identity is still changing! That means our `handleClick` identity is being changed at every re-render.

## Another common anti-pattern
Before diving into the proper solution, let's discuss a common anti-pattern used in these cases. 
Given that the `useCallback` accepts a dependency array, you could be tempted to specify an empty one to keep the identity fixed:

```js
  const handleClick = useCallback((item) => {
    toggleItem(item);
  }, []);
```

Despite keeping the identity stable, **this approach suffers from the same staleness bugs we discussed in previous sections**.
If we run it, you'll notice the items get unselected as it happened when we specified the custom comparator:

![React list example with bugs](/posts/react-list/react_list_example_3.gif)

In general, you should always specify the correct dependencies in `useCallback`, `useEffect` and `useMemo`, otherwise, you're 
exposing the application to potentially hard-to-debug staleness bugs.

# Solving the toggleItem identity problem
As we previously discussed, the problem with our `handleClick` callback is that its `toggleItem` dependency identity changes at each render, causing it to re-render as well:

```js
  const handleClick = useCallback((item) => {
    toggleItem(item);
  }, [toggleItem]);
```

Our first attempt is to wrap `toggleItem` with `useCallback` as we did with `handleClick`:

```js
  const toggleItem = useCallback(
    (item) => {
      if (!selected.includes(item)) {
        setSelected([...selected, item]);
      } else {
        setSelected(selected.filter((current) => current !== item));
      }
    },
    [selected]
  );
```

This does _not_ solve the problem though, as this callback depends on the external state variable `selected`, which changes every time `setSelected` is called. If we want its identity to remain stable, we need a way to make `toggleItem` pure. Luckily, we can use [`useState`'s functional updates](https://reactjs.org/docs/hooks-reference.html#functional-updates) to accomplish our goal:

```js
  const toggleItem = useCallback((item) => {
    setSelected((prevSelected) => {
      if (!prevSelected.includes(item)) {
        return [...prevSelected, item];
      } else {
        return prevSelected.filter((current) => current !== item);
      }
    });
  }, []);
```

As you can see, we wrapped our previous logic inside the `setSelected` call, which in turn provides the previous state value we need to compute the new selected items.

If we go ahead and run the refactored example, it works and it's also snappy! We can also run the usual profiler to get a sense of what's happening:

Hovering on the item being rendered:
![Fixed react example](/posts/react-list/react_list_memo_good_2.png)

Hovering on the other items:
![Fixed react example 2](/posts/react-list/react_list_memo_good_1.png)

As you can see, after selecting an item we only render the current one being selected now, while the others are being memoized. 

## A note on functional state updates
In the example we just discussed, converting our `toggleItem` method to the functional mode of `useState` was relatively trivial.
In real-world scenarios, things might not be as straightforward.

For example, your function might depend on multiple state pieces:

```js
  const [selected, setSelected] = useState([]);
  const [isEnabled, setEnabled] = useState(false);

  const toggleItem = useCallback((item) => {
    // Only toggle the items if enabled
	if (isEnabled) {
	  setSelected((prevSelected) => {
		if (!prevSelected.includes(item)) {
		  return [...prevSelected, item];
		} else {
		  return prevSelected.filter((current) => current !== item);
		}
	  });
	}
  }, [isEnabled]);
```

Every time the `isEnabled` value changes, your `toggleItem` identity will change as well.
In these scenarios, you should either merge both sub-states into the same `useState` call, or even better, convert it to a [`useReducer`](https://reactjs.org/docs/hooks-reference.html#additional-hooks) one.
Given that `useReducer`'s `dispatch` function has a stable identity, you can scale this approach to complex states.
Moreover, the same applies to [Redux](https://redux.js.org/)'s `dispatch` function, so you can move the item toggle logic at the Redux level and convert our `toggleItem` function to something as:

```js
  const dispatch = useDispatch();

  // Given that the dispatch identity is stable, the `toggleItem` will be stable as well
  const toggleItem = useCallback((item) => {
    dispatch(toggleItemAction(item))
  }, [dispatch]);
```

# Virtualizing the list?
Before closing the article, I wanted to briefly cover _list virtualization_, a common technique used to improve performance for long lists.
In a nutshell, list virtualization is based on the idea of rendering just a sub-set of the items in a given list (generally the currently visible ones) and deferring the others.
For example, if you have a list with a thousand items but only 10 are visible at any given time, then we might only render these 10 first, and the others can be rendered _on-demand_ when needed (i.e. after scrolling).

List virtualization offers two main advantages compared to rendering the entire list:
* Faster initial start time, as we only need to render a subset of the list
* Lower memory usage, as only a subset of the items is being rendered at any given time

That said, list virtualization is not a silver bullet you should always use, as it increases complexity and can be glitchy.
Personally, I'd avoid virtualized lists if you are only dealing with hundreds of items, as the memoization techniques we discussed in this article are often effective enough  (older mobile devices might require a lower threshold). As always, the right approach depends on the specific use case, so I'd highly recommend profiling your list before diving into more complex optimization techniques.

We are going to cover virtualization in a future article. In the meanwhile, you can read more about virtualized lists in React, with libraries like [react-window](https://github.com/bvaughn/react-window), and in React Native, with the built-in [FlatList](https://reactnative.dev/docs/flatlist) component.

# Conclusion
In this article, we covered list optimization in depth. We started from a problematic example and gradually solved most of the performance problems.
We also discussed the main anti-patterns you should be aware of, along with potential ways to solve them.

In conclusion, lists are often the cause of performance problems in React, as all items are being re-rendered every time something changes by default. 
`React.memo` is an effective tool to mitigate the issue, but you might need to refactor your application to make your props' identities stable. 

The final code is available in [this CodeSandbox](https://codesandbox.io/s/commonreactlistmistakes-solved-7sn20?file=/src/App.js) if you're interested.

PS: there's one small `useMemo` optimization left to add in our example, can you spot it yourself? :)
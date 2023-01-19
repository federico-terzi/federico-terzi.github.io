---
layout: post
title: Good Software Architectures are mostly about Boundaries
author: Federico Terzi
date: 2023-01-19
categories: software architecture design engineering
social_title: Good Software Architectures are mostly about Boundaries

---

As software engineers, we are always asked to design maintainable and extensible software architectures. While design patterns and best practices help, most of them are just facades to one larger and fundamental principle: designing good boundaries. 

<!--more-->

![Boundaries](/posts/2023-01-19-good-software-architectures-are-mostly-about-boundaries/image0.png)


In this article, we are going to discuss boundaries following a pragmatic approach, presenting examples of problematic boundaries and discussing possible solutions. In the process, we’ll also try to derive general and reusable guidelines to design better boundaries in the future.


# What are boundaries?


Before diving into the problematic examples, let’s take a step back and define what a boundary means in the context of this article: 


> Boundaries are the contracts between different software components, and model the communication between them.


![Boundaries are contracts](/posts/2023-01-19-good-software-architectures-are-mostly-about-boundaries/image1.png)


Boundaries are contracts. Different languages call them in different ways: interfaces, traits, types, signatures, but in a nutshell, boundaries define what information goes in and out of any given software component. Boundaries exist at all levels of the stack, defining the interactions between high-level systems, all the way down to services, modules, and functions.


Boundaries are a special part of a system. Despite accounting for a relatively small portion of a codebase, boundaries protect implementations from the outside world. A well-thought-out boundary lets consumers perform high-level operations without worrying about the low-level details of _how_ the operation is implemented. 


Boundaries are usually hard to change. Because boundaries define the interactions between software components, their shape strongly influences how consumers query producers. As a result, changing a boundary might require all its consumers to change. For example, let’s consider a web service, where its public API defines the boundary with clients. Changing the implementation of a route handler might be trivial, but changing the API shape should be done carefully, as we might break all dependent clients. This is one of the reasons why versioned APIs exist, and why changing boundaries is hard.


# Good and bad boundaries


At the highest level, good boundaries promote two important software engineering principles:

1. **Single responsibility**: every software component is only responsible for one domain area, minimizing the overlap with other components’ responsibilities.
2. **Loose coupling**: every software component is weakly associated with the others so that a change in one component doesn’t affect the others. Moreover, software components should know as little as possible about the other components.

At the same time, bad boundaries tend to display opposite properties:

1. **Multiple responsibilities** (aka. “fat” software components): fewer modules that are responsible for several domain areas, and are hard to change.
2. **Tight coupling**: software components that are strongly dependent on each other, knowing a lot about each other’s implementation details.

![Good vs Bad boundaries](/posts/2023-01-19-good-software-architectures-are-mostly-about-boundaries/image2.png)


Another useful tool to evaluate the quality of a boundary is to analyze its _information leaks_, that is, the amount of unnecessary information that goes through it. 


> Each software component should minimize the amount of information it has to deal with, accepting and exposing the least amount of information necessary to perform its responsibility.


When we allow a service or module to know more than it needs to, we expose it to the risk of becoming strongly coupled with other components, making the system hard to maintain in the long term.


# A problematic boundary


After covering boundaries at a high level, we are now ready to tackle our first problematic boundary. We are going to discuss a common anti-pattern found in the front-end world, focusing on the process of designing good component interfaces.


Our goal is to create a React component to display users’ avatars. 


![The Avatar Component](/posts/2023-01-19-good-software-architectures-are-mostly-about-boundaries/image3.png)


Let’s assume we already have a `User` type defined in our codebase with the following schema:


```typescript
type User = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
}
```


During the application lifecycle, we’ll obtain the currently logged-in `User` from our authentication API. 


Given that we already have a `User` instance from our authentication layer and it contains all the information we need, a possible approach to implement the `Avatar` component could be to accept a `User` object as prop:


```typescript
type Props = {
  user: User;
}

const Avatar = ({ user }: Props) => {
  return <div>
    <img src={user.imageUrl} />
    <span>{user.firstName}</span>
  </div>
}

// Then to use it
<Avatar user={user} />
```


Despite displaying the user image and name correctly, this `Avatar` implementation is not great: by accepting a `User` as prop, we are leaking a lot of information through the interface boundary, which could hurt maintainability in the long run.


For example, suppose that in a few weeks, we are asked to implement a comment section under our application’s blog posts. 


![Comment List](/posts/2023-01-19-good-software-architectures-are-mostly-about-boundaries/image4.png)


Ideally, we would like to re-use the `Avatar` component to display comments’ users. Unfortunately, the Comment API does not return a `User` object, but rather a `PublicUser` object, having the following schema:


```typescript
type PublicUser = {
  firstName: string;
  lastName: string;
  thumbnailUrl: string;
  karma: number;
}
```


As you can see, `PublicUser` has both the first name and the image URL we need, so can we use it? Well, not exactly, as the `Avatar` component can only accept `User` objects, not `PublicUser` (s). If we tried to pass `PublicUser`s to the Avatar, besides the TypeScript compiler screaming at us, we would not be able to see the image, as in `PublicUser` the field is called `thumbnailUrl` and not `imageUrl`.


With deadlines looming, we might be tempted to work around the issue with hackish solutions:


```typescript
// The lazy casting
<Avatar 
  user={{
    firstName: publicUser.firstName,
    lastName: publicUser.lastName,
    imageUrl: publicUser.thumbnailUrl} as User} 
/>

// Or even worse, the mock values
<Avatar 
  user={{
    firstName: publicUser.firstName,
    lastName: publicUser.lastName,
    imageUrl: publicUser.thumbnailUrl,
    email: ""}} 
/>

```


Why is it so hard? The problem is that **despite only needing a first name and image URL to work, our** **`Avatar`** **component takes a full** **`User`** **as input!** In other words, we are coupling the `Avatar` component with way more information than necessary, creating a _leaking boundary_. The problem might not become apparent until we either attempt to reuse the component, try mocking some data for testing, or start a refactor.


We’ll discuss other kinds of leaking boundaries throughout the article, but for now, let’s focus on the possible solutions. As we mentioned earlier, our main problem is that `Avatar` is tightly coupled with the `User` type, which has way more information than necessary. In general, the solution is to make our component only dependent on the exact information we need:


```typescript
type Props = {
  firstName: string;
  imageUrl: string;
}

const Avatar = ({ firstName, imageUrl }: Props) => {
  return <div>
    <img src={imageUrl} />
    <span>{firstName}</span>
  </div>
}

// Then to use it with both User and PublicUser
<Avatar firstName={user.firstName} imageUrl={user.imageUrl} />
<Avatar firstName={publicUser.firstName} imageUrl={publicUser.thumbnailUrl} />
```


The `Avatar` now only depends on `firstName` and `imageUrl`, so we can easily reuse it across the app. With this change, we promoted **loose coupling**, preventing an information leak (for example with the User’s `email` and PublicUser’s `karma`)


# Towards better boundaries


Before diving into the next examples, let’s summarize what we learned so far:


> Good boundaries do not leak any unnecessary information


# A service-level example


After covering an example related to the front-end world, our next case study revolves around a hypothetical E-commerce website. In particular, our goal is to design a web service to generate product recommendations. The service will accept `user_id` (s) and return the list of product recommendations that might be relevant for the given users.


The main API endpoint could look as follows:


```javascript
// Return a list of recommended products for the given user_id
GET /users/<user_id>/recommended_products
```


At the implementation level, the service will generate product recommendations based on the users’ past order history. In a nutshell, the process could be approximated with these steps:

1. The service receives a `user_id` as input.
2. The service fetches the list of recently purchased products for the given user.
3. The service returns a list of similar products.

The initial implementation would return a JSON response, such as:


```javascript
{
  "recommended_products": [
     {
       "product_id": 1234,
       "product_name": "Pizza Cutter",
       ...
     }
  ]
}
```


In a couple of weeks, the service implementation is completed and the team deploys it. 


After some real-world testing, the product team realizes that despite providing good recommendations in most cases, the service occasionally returns non-relevant products for some users. Given that the recommendations are based on the recently purchased products, the product team asks the service developers to add the original “source data” alongside the recommendations. In other words, the service would not only return the product recommendations but also the list of purchased products that were used to generate it.


The service developers think “well, adding that data shouldn’t be a huge problem, we already have it in our API handler, we can just add an additional response field. We could turn it off by default and add an additional query parameter `include_latest_purchases` to request it”.


Fast forward a couple of hours, and our API response looks as follows:


```javascript
GET /users/<user_id>/recommended_products?include_latest_purchases=true

{
  "recommended_products": [
     {
       "product_id": 1234,
       "product_name": "Pizza Cutter",
       ...
     }
  ],
  "latest_ordered_products": [
     {
       "product_id": "456",
       "product_name": "Pizza Plate"
       ...
     }
  ]
}
```


The product team is happy. Thanks to this additional data, they figure out that the broken product recommendations were caused by some fancy Unicode characters contained in a few products’ names. A happy ending, right? Well, kind of. For now, we got the quick win the business needed at the expense of a minor information leak.


A few weeks afterward, a product manager realizes that users might be also interested in re-buying some of their previously purchased products. The (already busy) developers are therefore asked to add a new section to the E-commerce Homepage to show a “buy again” section, with some of their previously purchased products.


With the deadlines looming, the assigned developer investigates the easiest way to provide that information. After a painful experience the month before, the developer dreads the idea of using the Orders API again, as it’s a legacy, badly-designed service that it’s an absolute pain to use. During this search, the developer stumbles upon the Recommendation API and its `latest_ordered_products` parameter. Eureka! Given that the frontend already uses the Recommendation API on the Homepage, getting the products necessary for the “buy again” section would be as straightforward as passing the `include_latest_purchases` parameter and reading another JSON field.


Shortly thereafter, the “Buy again” section is up and running on the E-commerce homepage, and everyone is happy.


While nothing has broken yet, let’s stop for a moment to analyze the current situation:

1. The recommendation service, whose sole goal was to provide a list of recommended products, exposed the additional `latest_ordered_products` field (an implementation detail) for debugging purposes.
2. The frontend now uses this additional `latest_ordered_products` field to implement the (unrelated) “buy again” feature.

We’ll soon discuss why this is a problem, but for now, let’s remember that ideally, all software components should have a single responsibility and be loosely coupled.


Fast-forward a few weeks, the company’s data scientists design a new recommendation algorithm based on user profiling. Instead of using the previous order history to generate the recommendations, the new algorithm would profile the users based on some demographic information, and suggest products that are relevant to the profile types. Remember, the goal of the recommendation service is to generate a list of recommended products for a given user ID. 


The response format for the new algorithm is the same as the original API contract: 


```javascript
GET /users/<user_id>/recommended_products

{
  "recommended_products": [
     {
       "product_id": 1234,
       "product_name": "Pizza Cutter",
       ...
     }
  ]
}
```


While reviewing the code, the developers of the recommendation service stumble upon the `include_latest_purchases` parameter. This time, the products are based on the users’ demographics rather than their past orders, so that information is not available. After a bit of consideration, the developers are confident they can remove it, as it was only used as a one-off debugging tool and it’s unlikely someone is still using it. Just to be safe, they look at the request metrics to verify that no client is using that parameter, and… Well, to their surprise, it’s heavily used! How come a one-off debugging tool is still being used after months?


After some investigation, they realize the Homepage needs that parameter to display the “Buy Again” section, and deploying the new recommendation service as-is will break it.


Needless to say, the release date is postponed, a lengthy discussion between the service team and the frontend team is started, and other expensive consequences.


## What went wrong


From a high-level perspective, this issue was caused by a problematic boundary: 

1. When the developers added the `latest_ordered_products` field, they exposed an implementation detail, leaking some information not related to the main service responsibility.
2. When the frontend team used the `latest_ordered_products` field to implement the “buy again” feature, they created another _implicit_ responsibility for the recommendation service, violating the single responsibility principle.

Every time a service, module, or function exposes more information than necessary, we run the risk of getting consumers to depend on it. As a result, consumers become coupled with implementation details rather than abstract APIs, making the system harder to change.


## How we could have prevented it


API requests and responses act as contracts. Therefore, we should be extremely careful with all the information we expose. Firstly, we should ask: “is this information absolutely necessary to perform the service responsibility?” and also “If I completely changed the implementation of the service, would this data still be relevant?”


In the case of the product recommendation service, the only responsibility was to return the list of recommended products for the given user. The fact that it was derived from the user’s latest purchases was an implementation detail, and should not have been exposed.


# Another step forward


Before diving into our last example, let’s discuss what we learned so far:


> Good boundaries do not leak any unnecessary information


> Good boundaries focus on a single responsibility


# Other benefits of good boundaries


We’ll close the article by discussing other benefits of good boundaries, starting again from a hypothetical scenario: we are hired as consultants by a rental company that is rebuilding its web application. As part of our duties, we are asked to create a function that, given a list of `House`s, returns the closest to a given coordinate.


Let’s assume we already have a `House` type defined in our codebase:


```javascript
type House = {
  id: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  owner: {
    name: string;
    phoneNumber: string;
  };
  coordinates: {
    longitude: number;
    latitude: number;
  }
}
```


As you can see, besides the address and owner information we find the `coordinates` field, which is all we need to implement this functionality. 


Our method’s signature could look as follows:


```javascript
function getClosestHouse(houses: House[], point: { latitude: number; longitude: number; }): House {
  // ... code to calculate the closest house
}
```


As part of our development process, we also want to make sure it works correctly, so we start writing unit tests:


```javascript
test("returns closest house correctly", () => {
  const mockHouse1: House = {
    id: "123",
    address: {
      street: "",
      city: "",
      state: "",
    },
    owner: {
      name: "John",
      phoneNumber: "1234",
    };
    coordinates: {
      longitude: 1,
      latitude: 2,
	  }
  }
	const mockHouse2: House = {
    id: "456",
    address: {
      street: "",
      city: "",
      state: "",
    };
    owner: {
      name: "Bob",
      phoneNumber: "1234",
    };
    coordinates: {
      longitude: 6,
      latitude: 7,
	  }
  }

	const closestHouse = getClosestHouse([mockHouse1, mockHouse2], { latitude: 1, longitude: 2});
  expect(closestHouse).toBe(mockHouse1); 
})
```


Despite covering the main use case of our function, this test is unnecessarily verbose and hard to maintain due to all the unrelated fields we need to specify in the mocks. Why do we need to specify an owner in the mock if we are only interested in using the `coordinates` field? If at some point in the future, another field is added to the `House` type, we would need to update the test even if the change is unrelated to the functionality we are testing. In short, this would become a maintenance burden.


A first approach to mitigate the problem could be to use casting:


```javascript
test("returns closest house correctly", () => {
  const mockHouse1 = {
    coordinates: {
      longitude: 1,
      latitude: 2,
	  }
  } as House;
	const mockHouse2 = {
    coordinates: {
      longitude: 6,
      latitude: 7,
	  }
  } as House;

	const closestHouse = getClosestHouse([mockHouse1, mockHouse2], { latitude: 1, longitude: 2});
  expect(closestHouse).toBe(mockHouse1); 
})
```


This approach solves the maintenance and verbosity issues, though it has one potential problem: while TypeScript is smart enough to check whether what we are casting is reasonable (for example, if we tried to do `{ foo: true } as House`, it wouldn’t let us do it, as the two types are too incompatible), there are still some cases in which that casting could silence a problem. For example, let’s say for whatever reason we needed to add an `extra` field to the `House` coordinates:


```javascript
type House = {
  id: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  owner: {
    name: string;
    phoneNumber: string;
  };
  coordinates: {
    longitude: number;
    latitude: number;
		extra: string; // <- This field
  }
}
```


> Note: adding a field to the `coordinates` field doesn’t make much sense in this context, but there are cases where adding a field could likely happen. For the sake of this example, pretend `coordinates` is one of them :) 


Now we have a problem: our test would still pass the TypeScript compilation without errors, even though we would want to be notified of this new incompatibility:


```javascript
test("returns closest house correctly", () => {
  const mockHouse1 = {
    coordinates: {
      longitude: 1,
      latitude: 2,
      // <-- missing the 'extra' field, but typescript does not complain
	  }
  } as House;
	const mockHouse2 = {
    coordinates: {
      longitude: 6,
      latitude: 7,
      // <-- missing the 'extra' field, but typescript does not complain
	  }
  } as House;

	const closestHouse = getClosestHouse([mockHouse1, mockHouse2], { latitude: 1, longitude: 2});
  expect(closestHouse).toBe(mockHouse1); 
})
```


In a lucky case, the test would fail at runtime in an obvious way, letting us realize the problem quickly. In an unlucky scenario, we would lose time to track down a cryptic error and fix it.


## An alternative approach


A possible alternative would be to define the `getClosestHouse` function with a more focused boundary:


```javascript
type WithCoordinates = {
  coordinates: {
    latitude: number;
    longitude: number;
  }
};

function getClosestEntity<T extends WithCoordinates>(entities: T[], point: { longitude: number; latitude: number }): T {
  // ...code to calculate the closest entity
}
```


In this case, the `getClosestEntity` method is generic and can perform its task with whatever object has `coordinates` in it, including `House`(s). This has two advantages:

1. Tests could be lean and without casts, which would be optimal in terms of maintainability

```javascript
test("returns closest entity correctly", () => {
  const mockEntity1 = {
    coordinates: {
      longitude: 1,
      latitude: 2,
	  }
  };
	const mockEntity2 = {
    coordinates: {
      longitude: 6,
      latitude: 7,
	  }
  };

	const closestEntity = getClosestEntity([mockEntity1, mockEntity2], { latitude: 1, longitude: 2});
  expect(closestEntity).toBe(mockEntity1); 
})
```

1. We could reuse the `getClosestEntity` function with many different entities without changing the implementation

> Important note: the example we just discussed is very likely over-engineered. I choose a simple example to make the point easier to understand, but I wouldn’t suggest this approach for such a simple use case. This approach really shines when applied to complex algorithms and logic we need to share in several different contexts.


# Conclusion


Throughout the article, we gave a general overview of boundaries. We started by defining boundaries and, through a series of examples, discussed the difference between good and bad ones, along with the consequences they can have on the software we produce. 


As always, balancing best practices and over-engineering is hard. You shouldn’t always apply these techniques, but rather, consider them as an additional tool to create better software.



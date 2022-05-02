---
layout: post
title:  "The single, most important trick to build robust applications"
author: Federico Terzi
date:   2022-05-02
categories: react trick guide robust applications invalid states unrepresentable typescript static types
social_title: "The single, most important trick to build robust applications"
social_subtitle: "Making invalid states unrepresentable"
---

In the last decade, many functional programming concepts have been making their way into modern, non-functional languages. Instead of going all-in, developers can choose to gradually adopt some of the paradigms in their applications, enjoying the best of both worlds.

<!--more-->

In this article, we are going to discuss a functional programming technique that can greatly improve the reliability of your front-end applications: making invalid states unrepresentable. Although these concepts can be applied to most frameworks and languages, we are going to focus on React applications written in TypeScript.

## Our example
To start our discussion, we are going to focus on a simple login form as an example (you can find the complete code in [this Codesanbox](https://codesandbox.io/s/reactinvalidstatesunrepresentable-bad-tbwvi?file=/src/App.tsx)).
In a nutshell, the example is composed of:
* A `LoginBox` component, which contains the input fields and invokes a callback when the user clicks on `Login`
* A `login` function, which simulates a network call to a login endpoint. If successful, this function returns a _token_.
* The `App` component, which keeps the application state and displays the appropriate messages/components.

![Login example](/posts/states-unrepresentable/login_example_1.gif)

Here's the complete code:

```ts
import { useState } from "react";

const LoginBox = ({
  onLogin
}: {
  onLogin: (user: string, pass: string) => void;
}) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <p>Insert login details (use 'test' as password for correct logins)</p>
      <label htmlFor="user">User</label>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <label htmlFor="pass">Password</label>
      <input
        name="pass"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={() => onLogin(user, pass)}>Login</button>
    </div>
  );
};

// Simulate a login request
function login(user: string, pass: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pass === "test") {
        // Return a fake user token
        resolve("c6041ffc-5e13-4f6d-bb33-bf9d3ae20262");
      } else {
        reject(new Error("invalid password"));
      }
    }, 1000);
  });
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | undefined>(undefined);
  const [error, setError] = useState<unknown | undefined>(undefined);

  const handleLogin = async (user: string, pass: string) => {
    setLoading(true);

    // If we don't reset them here, we might have inconsistencies
    // after multiple logins
    setError(undefined);
    setUserToken(undefined);

    try {
      const newUserToken = await login(user, pass);

      setUserToken(newUserToken);
    } catch (error) {
      setError(error);
    }

    // We need to explicitly tell react that we are not loading anymore
    setLoading(false);
  };

  const handleLogout = () => {
    setUserToken(undefined);
  };

  return (
    <div className="App">
      <h1>Login Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p>An error occurred: {String(error)}</p>}
      {!userToken ? (
        <LoginBox onLogin={handleLogin} />
      ) : (
        <>
          <p>You're logged in! Your user token is {userToken}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
```

## The problem
The example proposed above works as expected, but it's not very maintainable. The main problem lies in the fact that the different app-state fields (loading, error, userToken) are stored and updated independently.

Suppose at some point, a coworker not particularly familiar with this area of the codebase changes the `handleLogin` logic to fit some new requirements. As part of the process, they mistakenly forget to reset the error state with `setError(undefined)`:

```ts
  const handleLogin = async (user: string, pass: string) => {
    setLoading(true);

    // The coworker deletes the following line
    // setError(undefined);  <- this one gets deleted
    setUserToken(undefined);

    try {
      const newUserToken = await login(user, pass);

      setUserToken(newUserToken);
    } catch (error) {
      setError(error);
    }

    // We need to explicitly tell react that we are not loading anymore
    setLoading(false);
  };
```

The coworker now attempts to log in and it works as expected:

![Login seems to work as expected](/posts/states-unrepresentable/login_example_2.gif)

The happy coworker then proceeds to create PR and, with a non-zero probability, the PR gets approved and goes into staging/production.

Happy ending, right? Not exactly. The application can now enter an _inconsistent state_ when a user gets the first login wrong and the second one correct:

![Login inconsistent state](/posts/states-unrepresentable/login_example_3.gif)

As you can see, **the error message is still being shown after a successful login attempt**.
This is happening because the `setError(undefined)` call has been removed, and as a result, the error message is not being reset when performing a new login attempt.

It might be easy to blame the coworker for such an oversight, but actually, the problem lies in the way the application state was originally structured. By having the `error`, `loading` and `userToken` states being updated independently, we made it easier to get into an inconsistent state.

Remember, **the best systems are the ones that make it harder to do wrong things.** In the following sections, we're going to analyze a design that could have prevented such mistakes.

> In the previous example, I chose an hypothetical coworker as the person doing the mistake. I'm definitely not implying that only coworkers make mistakes, everyone does. I do plenty of mistakes on a daily basis :)

## A better approach (but still not optimal)
I hear some of you screaming: "_You should have used useReducer/Redux/Zustand/{random pokemon name} instead of those multiple useState!_"

Indeed, in real-world scenarios, you would have likely used a more structured approach to handle the app state, but **that doesn't necessarily solve the problem of invalid states**. 

For example, let's refactor the `App` code to use React's [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) instead of multiple `useState`:

```ts
// This is the app state
type State = {
  loading: boolean;
  error?: unknown;
  userToken?: string;
};

const initialState: State = {
  loading: false
};

// The various actions we can use to update that state
type PendingAction = {
  type: "pending";
};

type SuccessAction = {
  type: "success";
  userToken: string;
};

type FailureAction = {
  type: "failure";
  error: unknown;
};

type LogoutAction = {
  type: "logout";
};

type Action = PendingAction | SuccessAction | FailureAction | LogoutAction;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "pending":
      return {
        loading: true
      };
    case "success":
      return {
        loading: false,
        userToken: action.userToken
      };
    case "failure":
      return {
        loading: false,
        error: action.error
      };
    case "logout":
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async (user: string, pass: string) => {
    dispatch({ type: "pending" });

    try {
      const newUserToken = await login(user, pass);

      dispatch({ type: "success", userToken: newUserToken });
    } catch (error) {
      dispatch({ type: "failure", error });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="App">
      <h1>Login Example</h1>

      {state.loading && <p>Loading...</p>}
      {state.error && <p>An error occurred: {String(state.error)}</p>}
      {!state.userToken ? (
        <LoginBox onLogin={handleLogin} />
      ) : (
        <>
          <p>You're logged in! Your user token is {state.userToken}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
```

This version improves our example on multiple fronts:
* The handlers (`handleLogin` and `handleLogout`) don't need to know about the internal state representation anymore, but can simply dispatch actions in a _declarative_ way.
* It's harder to forget updating a slice of the state, as they are handled in a central place (the `reducer` function) instead of being scattered around handlers.

That said, despite making it harder to make the state inconsistent, it's still possible to do so. 

Let's say that our product manager requests to implement a "failed attempts" counter. In a rush, we modify the `failure` case of the reducer to be based on the previous state:

```ts
    case "failure":
      return {
        ...state,
        error: action.error,
        failedAttempts: state.failedAttempts + 1,
      };
```

As a result, the "Loading..." label is still shown after a failed login attempt:

![Inconsistent state](/posts/states-unrepresentable/invalid-state.png)

Of course, this is another silly oversight that would have been easy to spot. We forgot to set `loading: false`, and instead took the previous state value (`true`) using the spread operator `...state`. Unfortunately, in real-world systems it's easy to make such mistakes when the state is made of many fields, and such oversights might not be as easy to spot.

Luckily, we can take this solution a step further. What if we let the compiler spot such mistakes? The answer is **making invalid states unrepresentable**.

## Making invalid states unrepresentable
Let's start from the previous state representation:

```ts
type State = {
  loading: boolean;
  error?: unknown;
  userToken?: string;
};
```

The first question we should be asking ourselves is: _what are the possible states of this system?_ There is no single best answer, but a possible representation could be:

* Idle
* Login pending
* Login success
* Login failure

> If the `idle` state doesn't make sense to you, keep in mind we are trying to model _all_ the possible states of this system. Idle represents the state of the system before the user makes a login attempt.

Then, we can think about which _fields and values_ those states can have:
* Idle
	* loading = false
* Login pending
	* loading = true
* Login success
	* loading = false
	* userToken = string
* Login failure
	* loading = false
	* error = Error/unknown/whatever is relevant

At this point, we can translate these states into code using Typescript's [Discriminated unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) (also known as _Algebraic Data Types_):

```ts
type State =
  | {
      type: "idle";
      loading: false;
    }
  | {
      type: "pending";
      loading: true;
    }
  | {
      type: "success";
      loading: false;
      userToken: string;
    }
  | {
      type: "failure";
      loading: false;
      error: unknown;
    };
```

Note how for each state, we are explicitly specifying which fields are present and, for some of them, even their value. Discriminated unions give us two superpowers:
* We don't need to add optional fields everywhere, nor do we need to check for undefined values. If a state has `type = "success"` then Typescript _guarantees_ that the `userToken` field will be available. In the same way, we won't be able to access the `userToken` if the state is `failure`

```ts
// This compiles correctly
if (state.type === "success") {
  console.log(state.userToken)
}

// This doesn't (and it's good!)
if (state.type === "failure") {
  console.log(state.userToken)
}
```
* We won't be able to set inconsistent states in the reducer

Updating our previous example with the new approach, we get:

```ts
type State =
  | {
      type: "idle";
      loading: false;
    }
  | {
      type: "pending";
      loading: true;
    }
  | {
      type: "success";
      loading: false;
      userToken: string;
    }
  | {
      type: "failure";
      loading: false;
      error: unknown;
    };

const initialState: State = {
  type: "idle",
  loading: false
};

type PendingAction = {
  type: "pending";
};

type SuccessAction = {
  type: "success";
  userToken: string;
};

type FailureAction = {
  type: "failure";
  error: unknown;
};

type LogoutAction = {
  type: "logout";
};

type Action = PendingAction | SuccessAction | FailureAction | LogoutAction;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "pending":
      return {
        type: "pending",
        loading: true
      };
    case "success":
      return {
        type: "success",
        loading: false,
        userToken: action.userToken
      };
    case "failure":
      return {
        ...state,
        type: "failure",
        loading: false,
        error: action.error
      };
    case "logout":
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async (user: string, pass: string) => {
    dispatch({ type: "pending" });

    try {
      const newUserToken = await login(user, pass);

      dispatch({ type: "success", userToken: newUserToken });
    } catch (error) {
      dispatch({ type: "failure", error });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="App">
      <h1>Login Example</h1>

      {state.loading && <p>Loading...</p>}
      {state.type === "failure" && (
        <p>An error occurred: {String(state.error)}</p>
      )}
      {state.type !== "success" ? (
        <LoginBox onLogin={handleLogin} />
      ) : (
        <>
          <p>You're logged in! Your user token is {state.userToken}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
```

At this point, Typescript will make sure that the state is always in a consistent state. For example, the previous mistake (forgetting `loading: false` in the `failure` case due to the spread operator) won't compile:

![Typescript fails to compile an invalid state](/posts/states-unrepresentable/typescript1.png)

We made _invalid states unrepresentable_ 😎

> Note: You might be wondering why we added the `loading` field to all states. The reason is that I thought it would make the example easier to understand. But in this simple scenario, we could drop the `loading` field entirely and only show the loading message when the state is pending (`state.type === 'pending'`).

## Final thoughts
All right! We started from a problematic example and gradually improved the way our state is represented, making the app more robust along the way.

It's important to consider these techniques as an additional tool you have at your disposal rather than absolute truths. There might be cases where these techniques are impractical for several reasons. As always, use the right tool for the job!

If you're interested, you can find the complete code for our final solution in [this Codesandbox](https://codesandbox.io/s/reactinvalidstatesunrepresentable-good-9l8pym?file=/src/App.tsx).
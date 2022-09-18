import React, { useState } from "react";

function namedFunction() {
  console.log("Named Function");
  return 0;
}

function UseStateHook() {
  /**
   * ! React hooks must not be declared conditionally.
   * ! React hooks must be called in the exact same order in every component render
  
   */
  if (true) {
    // const [error, setError] = useState("error");
  }

  /**
   * * anonymous function will get executed only once on initialization
   * * named functions with fn braces() get executed eveytime state changes.

    const [count, setCount] = useState(() => {
      console.log("hii");
    });
    const [count, setCount] = useState(namedFunction());
  */

  /**
   * * to update objects in react hooks preserve the value of prevstate using spread operator(...) and update the req property.
   *
   * const [obj, setObj] = useState({name: "", age: ""});
   * setObj(prevObj => {...prevObj, age: 10})
   */

  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <section>
        <h1>UseState Hook</h1>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </section>
    </>
  );
}

export default UseStateHook;

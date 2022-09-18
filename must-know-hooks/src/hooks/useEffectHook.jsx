import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [resourceType, setresourceType] = useState("");
  const [items, setItems] = useState([]);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  function handleClick(value) {
    setresourceType(value);
  }

  function handleResize() {
    setwindowWidth(window.innerWidth);
  }

  /**
   * * useEffect hooks are used to handle side effects
   * @param anonymousFunction
   * @param dependencyArray this is optional
   * * useEffect hooks gets executed on component initialization and every time an item in the dependency array gets updated
   */
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json.slice(0, 5)));

    console.log("resource type changed to ", resourceType);
  }, [resourceType]);

  /**
   * * cleanup function gets executed everytime hook gets rendered.
   * * cleanup functions are used to remove subscriptions or event listeners declared inside the hook when hook is unmounted
   */
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("cleanup function executed");
    };
  }, [windowWidth]);

  return (
    <>
      <section>
        <h1>UseEffect Hook</h1>
        <p>Window width is {windowWidth}</p>
        <button onClick={() => handleClick("posts")}>Posts</button>
        <button onClick={() => handleClick("users")}>Users</button>
        <button onClick={() => handleClick("comments")}>Comments</button>
        <ol>
          {items.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default UseEffectHook;

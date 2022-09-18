import React, { useState, useEffect, useCallback } from "react";

/**
 * * useCallback hook is used to eliminate unwanted function re-creation unless it's dependencies change
 *
 * @param anonymousFunction
 * @param dependencyArray optional
 *
 * @returns a function
 */
function UseCallbackHook() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const themeStyles = {
    backgroundColor: isDark ? "#333" : "#CCC",
    color: isDark ? "#CCC" : "#333",
  };

  /**
   * * getItems will only get re-created if number gets updated.
   *
   */
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <>
      <section>
        <h1>UseCallback Hook</h1>
        <div style={themeStyles}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setIsDark((prev) => !prev)}>
            Toggle Theme
          </button>
          <List getItems={getItems} />
        </div>
      </section>
    </>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);

  /**
   * * useEffect does not cause a infinite loop here because it gets executed only when function is recreated.
   * * calling getItems does not execute useEffect.
   */
  useEffect(() => {
    console.log("updating list...");
    setItems(getItems());
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default UseCallbackHook;

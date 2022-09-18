import React, { useState, useMemo, useEffect } from "react";

/**
 * * useMemo hook is used to avoid unwanted re-renders of a variable or function unless its dependency changes.
 * * useMemo uses a concept called memoization which caches the value of dependencies and does not execute unless its updated.
 *
 * ! Do not use useMemo for all cases. Because it caches values, it may again impact performance.
 * ! Use only at necessary places
 *
 * @param anonymousFunction
 * @param dependencyArray optional
 *
 * @returns the return value of the function
 */
function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  /**
   * * useMemo executes slowFunction only when number gets updated
   */
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  /**
   * * useMemo also provides referential equality
   * * to avoid unwanted reinitialization of objects
   *
   *
   * * Referential equality - Objects are stored by references.
   * * comparing two objects always equals to false because only the references are compared.
   */
  const themeStyles = useMemo(
    () => ({
      backgroundColor: isDark ? "#333" : "#CCC",
      color: isDark ? "#CCC" : "#333",
    }),
    [isDark]
  );

  useEffect(() => {
    console.log("themestyles updated...");
  }, [themeStyles]);

  return (
    <>
      <section>
        <h1>UseMemo Hook</h1>
        <div>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button onClick={() => setIsDark((prev) => !prev)}>
            Toggle Theme
          </button>
          <div style={themeStyles}>{doubleNumber}</div>
        </div>
      </section>
    </>
  );
}

// some slow function
function slowFunction(num) {
  console.log("executing slow function");
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}

export default UseMemoHook;

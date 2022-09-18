import React, { useState, useMemo, useEffect, useDeferredValue } from "react";

/**
 * * useDefferredValue hook is used to holdback slow performance code and execute it when there is a delay.
 * * it is a debounce mechanism provided by react itself
 *
 * ! Donot use until necessary because it causes a second re-render
 *
 * @param deferedInput the input value to be deferred
 */
function UseDefferredValueHook() {
  const [name, setName] = useState("");

  return (
    <>
      <section>
        <h1>UseDefferredValue Hook</h1>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <List input={name} />
        </div>
      </section>
    </>
  );
}

function List({ input }) {
  const deferredInput = useDeferredValue(input);
  const LIST_SIZE = 10000;
  const list = useMemo(() => {
    if (deferredInput === "") {
      return [];
    }
    let l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(deferredInput);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDefferred: ${deferredInput}`);
  }, [input, deferredInput]);

  return (
    <div style={{ height: "100px", overflowX: "scroll" }}>
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </div>
  );
}

export default UseDefferredValueHook;

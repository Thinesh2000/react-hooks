import React, { useEffect, useState, useRef } from "react";

/**
 * * useRef hook can be used to reference elements or values. it does not cause any re-render.
 * * it can be used to reference a dom element to access its properties like focus().
 * * since it does not cause any re-render its reference in jsx will get updated in the upcoming renders.
 *
 * * useRef provides an object with a single property called current { current : value }
 */
function UseRefHook() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  /**
   * * useRef can be used to monitor renders as it does not cause a render.
   * ! if useStates are used, it will cause a infinite loop as it also causes a re-render.
   * ! re-renders are expensive operations.
   */
  useEffect(() => {
    renderCount.current += 1;
  });

  function focusInput() {
    inputRef.current.focus();

    /**
     * ! do not use useRef to manipulate values of input elements.
     * inputRef.current.value = "hii";
     */
  }

  return (
    <>
      <section>
        <h1>UseRef Hook</h1>
        <div>
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>
            Input value is <mark>{name}</mark> and it has rendered{" "}
            <mark>{renderCount.current}</mark> times
          </p>
          <button onClick={focusInput}>Focus</button>
        </div>
      </section>
    </>
  );
}

export default UseRefHook;

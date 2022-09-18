import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

/**
 * * useLayoutEffect is used to render changes when dom is initialised.
 * * it is similar to useEffect except this is synchronous.
 *
 * @param anonymousFunction
 * @param dependencyArray
 */
function UseLayoutEffectHook() {
  const [show, setShow] = useState(false);
  const btnRef = useRef();
  const popupRef = useRef();

  /**
   * ! use this only if you need to reflect changes in dom before render(synchronous)
   * ! this slows down application because it is an synchronous operation
   */
  useLayoutEffect(() => {
    if (popupRef.current == null || btnRef.current == null) return;
    const bottom = btnRef.current.getBoundingClientRect()?.bottom;
    popupRef.current.style.top = `${bottom + 50}px`;
  }, [show]);

  return (
    <>
      <section>
        <h1>UseLayoutEffect Hook</h1>
        <div>
          <button ref={btnRef} onClick={() => setShow((prev) => !prev)}>
            Click here
          </button>
          {show && (
            <div ref={popupRef} style={{ position: "absolute" }}>
              popup Message
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default UseLayoutEffectHook;

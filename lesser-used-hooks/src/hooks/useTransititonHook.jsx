import React, { useState, useTransition } from "react";

/**
 * * useTransition hook is used to prioritize element rendering.
 * * the page will render the regular components without waiting for low priority code
 * * the low priority code will run in the background and will render once it is done
 *
 * @returns 'isPending' - lets you know if the rendering is done or not
 * @returns 'startTransition' - a function to wrap your low priority code
 *
 * ! Do not use until you feel that a set of code slow down your component
 * ! this causes additional rendering
 * ! Use only if you face performance related issues
 */
function UseTransititonHook() {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 10000;

  function handleChange(e) {
    setName(e.target.value);

    /**
     * * low priority code is wrapped under startTranstion
     */
    startTransition(() => slowfn(e));
  }

  function slowfn(e) {
    let l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  }

  return (
    <>
      <section>
        <h1>UseTransititon Hook</h1>
        <div>
          <input type="text" value={name} onChange={handleChange} />
          {isPending ? (
            <span>Loading...</span>
          ) : (
            <div style={{ height: "100px", overflowY: "scroll" }}>
              {list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default UseTransititonHook;

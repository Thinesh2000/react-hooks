import React, { useId } from "react";

/**
 * * useId hook is used to generate random ids
 * * the ids continue to be the same on every render unless ordering is changed
 *
 * @returns a random id.
 */
function UseIdHook() {
  return (
    <>
      <section>
        <h1>UseId Hook</h1>
        <div>
          <CustomInput />
        </div>
      </section>
    </>
  );
}

const CustomInput = () => {
  const id = useId();

  return (
    <>
      <div>
        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} type="text" />
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email" />
      </div>
    </>
  );
};

export default UseIdHook;

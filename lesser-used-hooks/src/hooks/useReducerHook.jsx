import React, { useReducer } from "react";
import { useState } from "react";

/**
 * * useReducer is used to handle more complex set of states
 *
 * @param reducerFunction a function that has two params 'state' and 'action'
 * * 'state' - the state itself
 * * 'action' - any addon to be able to update the state.
 * @param initialState the initial state
 */
const ACTIONS = {
  ADDTODO: "addTodo",
  TOGGLETODO: "toggleTodo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...state, newTodo(action?.payload?.name)];

    case ACTIONS.TOGGLETODO:
      const id = action?.payload?.id;
      let newList = state.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete;
          return { ...item, complete: !item.complete };
        }
        return item;
      });
      return newList;

    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    dispatch({ type: ACTIONS.ADDTODO, payload: { name } });
  }

  function toggleComplete(itemId) {
    dispatch({ type: ACTIONS.TOGGLETODO, payload: { id: itemId } });
  }

  return (
    <>
      <section>
        <h1>UseReducer Hook</h1>
        <div>
          <h4>TODO List</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          <List items={state} toggleComplete={toggleComplete} />
        </div>
      </section>
    </>
  );
}

function List({ items, toggleComplete }) {
  return (
    <div style={{ backgroundColor: "#333", color: "#CCC" }}>
      {items.map((item) => (
        <p
          key={item.id}
          style={{ textDecoration: item.complete ? "line-through" : "none" }}
          onClick={() => toggleComplete(item.id)}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}

export default UseReducerHook;

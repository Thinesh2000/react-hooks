import React from "react";
import { ContextConsumer } from "./useContextHook";

function ThemeToggler() {
  const { theme, toggleTheme } = ContextConsumer();

  return (
    <>
      <section>
        <h1>UseContext Hook</h1>
        <div style={{ textAlign: "center" }}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <span>{theme} theme is selected</span>
        </div>
      </section>
    </>
  );
}

export default ThemeToggler;

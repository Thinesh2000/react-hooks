import React, { useState, useContext } from "react";

/**
 * * Context hooks are used to avoid prop drilling.
 * * Add the global states and functions to the provider.
 * * All components wrapped inside the provider will be able to access the global states and functions.
 */

export const globalContext = React.createContext();

function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevtheme) => {
      const newTheme = prevtheme === "light" ? "dark" : "light";
      document.getElementById("main").className = newTheme;
      return newTheme;
    });
  }

  return (
    <globalContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export const ContextConsumer = () => {
  return useContext(globalContext);
};

export default ContextProvider;

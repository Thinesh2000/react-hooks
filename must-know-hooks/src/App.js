import "./App.css";

import UseStateHook from "./hooks/useStateHook";
import UseEffectHook from "./hooks/useEffectHook";
import ContextProvider from "./hooks/useContextHook";
import ThemeToggler from "./hooks/themeToggler";

function App() {
  return (
    <ContextProvider>
      <div id="main" className="light">
        <section>
          <h1 className="App" style={{ textAlign: "center" }}>
            Must Know Hooks - Web dev simplified
          </h1>
        </section>
        <hr />
        <UseStateHook />
        <hr />
        <UseEffectHook />
        <hr />
        <ThemeToggler />
      </div>
    </ContextProvider>
  );
}

export default App;

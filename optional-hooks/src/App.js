import "./App.css";
import UseLayoutEffectHook from "./hooks/useLayoutEffectHook";
import UseImperativeHandleHook from "./hooks/useImperativeHandleHook";
import UseIdHook from "./hooks/useIdHook";

function App() {
  return (
    <div id="main">
      <section>
        <h1 className="App" style={{ textAlign: "center" }}>
          Optional Hooks - Web dev simplified
        </h1>
      </section>
      <hr />
      <UseLayoutEffectHook />
      <hr />
      <UseImperativeHandleHook />
      <hr />
      <UseIdHook />
    </div>
  );
}

export default App;

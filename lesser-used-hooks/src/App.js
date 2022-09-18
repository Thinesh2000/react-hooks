import "./App.css";
import UseCallbackHook from "./hooks/useCallbackHook";
import UseDefferredValueHook from "./hooks/useDeferredValuesHook";
import UseMemoHook from "./hooks/useMemoHook";
import UseReducerHook from "./hooks/useReducerHook";
import UseRefHook from "./hooks/useRefHook";
import UseTransititonHook from "./hooks/useTransititonHook";

function App() {
  return (
    <>
      <div id="main">
        <section>
          <h1 style={{ textAlign: "center" }}>
            Lesser Used Hooks - Web dev simplified
          </h1>
        </section>
        <hr />
        <UseRefHook />
        <hr />
        <UseMemoHook />
        <hr />
        <UseCallbackHook />
        <hr />
        <UseReducerHook />
        <hr />
        <UseTransititonHook />
        <hr />
        <UseDefferredValueHook />
      </div>
    </>
  );
}

export default App;

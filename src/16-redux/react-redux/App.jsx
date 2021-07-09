import react from "react";
import store from "./store";

class App extends react.Component {
  render() {
    return (
      <>
        <button onClick={() => store.dispatch({ type: "increment" })}>+</button>
        <div>{store.getState().count}</div>
        <button onClick={() => store.dispatch({ type: "decrement" })}>-</button>
      </>
    );
  }
}

export default App;

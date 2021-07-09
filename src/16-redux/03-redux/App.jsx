import react from "react";
import { createStore } from "redux";
import reducer from "./reducer";
let store = createStore(reducer);
class App extends react.Component {
  render() {
    
    console.log("store", store);
    store.subscribe(() => {
      console.log(store.getState().count);
      document.querySelector("#count").innerHTML = store.getState().count
    });
    return (
      <>
        <button onClick={() => store.dispatch({ type: "increment" })}>+</button>
        <div id="count"></div>
        <button onClick={() => store.dispatch({ type: "decrement" })}>-</button>
      </>
    );
  }
  componentDidMount(){
    store.dispatch({type:''})
  }
}

export default App;

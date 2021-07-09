import react from "react";
import store from "./store";

class App extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("store",store);
    return (
      <>
        <button onClick={store.dispatch.bind(this, { type: "increment" })}>+</button>
        <div id="count"></div>
        <button onClick={store.dispatch.bind(this, { type: "decrement" })}>-</button>
      </>
    );
  }
  componentDidMount() {
    store.dispatch({});
    // function flatter(arr) {
    //   if (!arr.length) return;
    //   console.log("11",arr.some((item) => Array.isArray(item)));
    //   while (arr.some((item) => Array.isArray(item))) {
    //     console.log(arr);
    //     arr = [].concat(...arr);
    //     console.log("arr",arr);
    //   }
    //   return arr;
    // }
    
    // console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
  }
}

export default App;

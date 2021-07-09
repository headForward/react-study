import react, { useReducer } from "react";

const initState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
      };
    case "minus":
      return {
        count: state.count - 1,
      };
  }
};
export default function () {
  let [state, dispatch] = useReducer(reducer, initState);
  console.log("state", state);
  return (
    <div>
      <button onClick={() => dispatch({ type: "minus" })}>-1</button>
      {state.count}
      <button onClick={() => dispatch({ type: "add" })}>+1</button>
    </div>
  );
}

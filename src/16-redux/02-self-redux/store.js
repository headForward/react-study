let state = {
  count: 0,
};

const changeState = (action) => {
  action = action || { type: "" };
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

const render = () => {
  document.querySelector("#count").innerHTML = state.count;
};

const dispatch = (action) => {
  state = changeState(action);
  render();
};


export {
    dispatch
}
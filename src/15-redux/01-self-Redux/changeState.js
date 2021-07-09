let defaultState = {
  count: 0,
};

const changeState = (action,state) => {
  action = action || { type: "" };
//   console.log("state",state);
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count+1,
      };
    //   state.count++;
    //   break;
    case "decrement":
      return {
        ...state,
        count: state.count-1,
      };
    //   state.count--;
    //   break;
    default:
      return {
          ...state
      };
    //   break;
  }
};

export { changeState };

const defaultState = {
  List: ["task 1", "task 2"],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return state;
    case "PUT_DATA":
      return {
        List: [...state.List, action.task],
      };
    case "DELETE_DATA":
      console.log("0");
      let List = state.List.filter((val, index) => {
        return index !== action.index;
      });
      console.log("List", List);
      return {
        ...state,
        List,
      };
    default:
      return state;
  }
};

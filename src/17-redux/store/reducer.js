const defaultSate = {
  List: [],
};

const reducer = (state = defaultSate, action) => {
  switch (action.type) {
    case "GET_DATA":
      console.log(action.data);
      return {
        ...state,
        List: action.data,
      };
    case "PUT_DATA":
      return {
        List: [...state.List, { positionName: action.task }],
      };
    case "DELETE_DATA":
      let List = state.List.filter((item, index) => {
        return index !== action.index;
      });
      return {
        ...state,
        List,
      };
    default:
      return state;
  }
};

export default reducer;

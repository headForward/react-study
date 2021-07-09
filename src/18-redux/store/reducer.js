const defaultState = {
  list: [],
};

const reducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        list: action.data,
      };
    case "DELETE_DATA":
      let list = state.list.filter((item, index) => {
        return index !== action.index;
      });
      return {
        ...state,
        list,
      };
      case 'PUT_DATA':
          return{
              ...state,
              list:[...state.list,{positionName:action.value}]
          }
    default:
      return state;
  }
};

export default reducer;

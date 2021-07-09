const getList = (data) => {
  return {
    type: "GET_DATA",
    data,
  };
};

const asyncGetList = () => {
  return (dispatch) => {
    fetch("/position.json")
      .then((response) => response.json())
      .then((result) => {
        dispatch(getList(result.result));
      });
  };
};

const deleteList = (index) => {
  return {
    type: "DELETE_DATA",
    index,
  };
};

const putList = (value) => {
  return {
    type: "PUT_DATA",
    value,
  };
};

export { getList, asyncGetList, deleteList,putList };

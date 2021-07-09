const putList = (task) => {
  return {
    type: "PUT_DATA",
    task,
  };
};

const deleteList = (index) => {
  return {
    type: "DELETE_DATA",
    index,
  };
};

const setList= (data)=>{
    return {
        type:'GET_DATA',
        data
    }
}

const getList =()=>{
    return (dispatch)=>{
        console.log("111");
        let data = 0
        fetch('/position.json')
            .then(response=>response.json())
            .then(result=>{
                dispatch(setList(result.result))
            })
        
    }
}

export { deleteList, putList,getList };

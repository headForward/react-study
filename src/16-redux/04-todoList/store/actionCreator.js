const deleteList = (index)=>{
    return {
        type:'DELETE_DATA',
        index:index
    }
}

const putData = (task)=>{
    return{
        type:'PUT_DATA',
        task
    }
}


export {
    deleteList,
    putData
}
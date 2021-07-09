const defaultState = {
    count: 0,
};


const changeState = (action)=>{
    action = action || {}
    switch(action.type){
        case 'increment': 
            defaultState.count++
            break
        case 'decrement':
            defaultState.count--
            break
        default:
    }
}

const renderCount = ()=>{
    const countDom =  document.querySelector('#count')
   countDom.innerHTML = defaultState.count
}

const dispatch = (action)=>{
    changeState(action)
    renderCount()
}


export {
    dispatch,
    defaultState
}
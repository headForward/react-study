const defaultState = {
    count:0
}

const reduce = (state=defaultState,action)=>{
    switch(action.type){
        case 'increment':
            return {
                ...state,
                count:state.count+1
            }
        case 'decrement': 
            return {
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}

export default reduce
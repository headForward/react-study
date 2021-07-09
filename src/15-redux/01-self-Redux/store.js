import {changeState} from './changeState'
let state = {
    count: 0
}

const createStore = () =>{

    // getState 获取状态
    const getState = ()=>{
        return state
    }

    // 观察者模式
    const listeners = []
    const subscribe = (listener)=>{
        listeners.push(listener)
    }

    const dispatch = (action)=>{
        state = changeState(action,state)
        listeners.forEach(listener=>listener())
    }
    return {
        dispatch,
        getState,
        subscribe
    }
}
const store = createStore()
const render=(state)=>{
    document.querySelector('#count').innerHTML = store.getState().count
}
store.subscribe(render)


export default store
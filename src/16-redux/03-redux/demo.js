const {createStore} =  require('redux')
const reducer =  require('./reducer')

const store = createStore(reducer)

// console.log("store",store);

// setInterval(()=>{
//     store.dispatch({
//         type:'increment'
//     })
    
//     console.log("store",store.getState().count);
// },1000)

store.subscribe(()=>{
    console.log(store.getState().count);
})

setInterval(()=>{
    store.dispatch({type:'increment'})
},1000)
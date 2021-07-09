import react from "react";
import { dispatch} from './store'

class App extends react.Component {
  render() {
    return (
      <>
        <button onClick={dispatch.bind(this,{type:'increment'})}>+</button>
        <div id='count'></div>
        <button onClick={dispatch.bind(this,{type:'decrement'})}>-</button>
      </>
    );
  }
  componentDidMount(){
      dispatch({})
  }
}

export default App;

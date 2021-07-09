import React from "react";
import ReactDOM from "react-dom";
// import App from './01-getting-starts/Nest'
// import App from './01-getting-starts/ClassStyle'
// import App from './02-state-props/DataMount'
// import App from "./02-state-props/propType";
// import App from "./01-getting-starts/ClassNames";
// import App from "./02-state-props/State";
// import App from './03-state-uplifting/Parent'
// import App from './04-controled-conponent/App'
// import App from './05-render-data/App'
// import App from './06-event/App'
// import App from "./07-form/App";
// import App from './07-form/Select'
// import App from './'
//
// import App from './08-todolist/todoList'
// import App from './09-lifctimes/App'
// import App from './10-context/App'
// import App from './11-tongxun/App'
// import App from './12-context/App'
// import App from "./18-redux/todoList";
// import store from "./18-redux/store/state";
// import { Provider } from "react-redux";
// import App from "./19-router/App";
// import App from "./19-router/UrlParameters";
// import App from "./19-router/Nesting";
// import App from './19-router/01-router/App'
// import App from './20-canvas/App'
// import App from "./21-router/app";
// import App from './21-router/UrlParameters'
// import App from "./21-router/nesting";
// import App from './21-router/CustomLink'
// import App from "./22-router/App";
// import App from "./21-router/Redirect";
// import App from "./21-router/Login";
// import App from './21-router/params'
// import App from './21-router/sideBar'
// import App from './21-router/RouteConfig'
// import App from "./23-immutable/App";
// import App from "./24-Hooks/UseContext";

// import {CountText} from './13-context/Count'
// import App from './13-context/App'
// import App from './15-redux/01-self-Redux/App'
// import App from './16-redux/02-self-redux/App'
// import App from "./16-redux/03-redux/App";
// import App from './16-redux/react-redux/App'
// import store from './16-redux/react-redux/store'
// import App from "./16-redux/04-todoList/todoList";
// import App from "./24-Hooks/UseReduser";
// import App from "./24-Hooks/UseCallback";
// import App from "./18-redux/todoList";
// import App from './25-redux/Home.js'
import App from "./26-redux/App";
// import store from "./16-redux/04-todoList/store/index";
// import { Provider } from "react-redux";
// import App from "./17-redux/todoList";
// import { Provider } from "react-redux";
// import store from './17-redux/store/state'
// import App from './14-HOC/App'
// import App from "./App";
// const App = (props) => {
//   console.log(props);
// return <div>hello word {props.title}</div>;
// };

// class App extends React.Component{
//     render(){
//         return(
//         <div>hello word {this.props.title}</div>
//         )
//     }
// // }
// store.subscribe(()=>{
//     render()
// })

// import { BrowserRouter as Router } from "react-router-dom";
// function render(){
import { Provider } from "react-redux";
import store from "./26-redux/store/index";
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);
// }
// render()

// setTimeout(()=>{
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// },5000)

import react, { Component } from "react";
import hoc from "./hoc";

class App extends react.Component {
  render() {
    return <div>App</div>;
  }
  componentDidMount(){
console.log(this); 
  }
}

export default hoc(App);

import React, { Component } from "react";

import { Provider, Consumer, testContext } from "./testContext";

class ChildA extends Component {
  static contextType = testContext;
  render() {
    console.log(this);
    return <div>ChildA {this.context}</div>;
  }
}

class ChildB extends Component {
  static contextType = testContext
  render() {
    console.log('contextType',this);
    return (
      <div>
        <div>{this.context}</div>
        <ChildC></ChildC>
      </div>
    );
  }
}
function ChildC() {
  return (
    <div>
      <ChildD></ChildD>
      <Consumer>
          {
              (value)=>{
              return <div>{value}</div>
              }
          }
      </Consumer>
    </div>
  );
}

class ChildD extends Component {
  render() {
    return <div>ChildC</div>;
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider value="hello">
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    );
  }
}

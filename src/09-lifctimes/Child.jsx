import React, { Component } from "react";

class Child extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
//   shouldComponentUpdate(nextProps, nextState) {
//     return !(this.props.title === nextProps.title);
//   }
  render() {
    console.log("Child render");
    return <div>Child {this.props.title}</div>;
  }
}

export default Child;

import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
class Parent extends React.Component {
  state = {
    data: "",
  };
  handle(data) {
    console.log("111", data);
    this.setState({
      data,
    });
  }
  render() {
    return (
      <>
        <Child1 onReceiveData={this.handle.bind(this)}></Child1>
        <Child2 data={this.state.data}></Child2>
      </>
    );
  }
}

export default Parent;

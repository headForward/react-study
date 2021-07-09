import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    count: 0,
  };
  handleClick = (args) => {
    return (event) => {
      // console.log("clicked", this.state.count);
      // console.log(args);
      console.log(event.target);
    };
  };
  render() {
    return <div onClick={this.handleClick("abc")}>event</div>;
  }
}

export default App;

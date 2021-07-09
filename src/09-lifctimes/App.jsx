import React, { PureComponent } from "react";
import Child from "./Child";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      title: "!!!",
    };
    this.staticState = {
      z: 2,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  UNSAFE_componentWillMount() {
    this.staticState = {
      z: 3,
    };
    console.log(0);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        x: new Date().getTime(),
        title: "@@@",
      });
    }, 2000);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    // console.log(this.staticState.z);
    console.log("render");

    return (
      <>
        <Child title="hello"></Child>
      </>
    );
  }
}

export default App;

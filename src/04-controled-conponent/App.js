import React, { createRef } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.ipt = createRef();
  }
  state = {
    textValue: "hello",
  };
  handleChange(e) {
    // console.log(this.state.textValue);
    // console.log("e", e);
    this.setState({
      textValue: e.target.value,
    });
  }
  render() {
    return (
      <div>
        {/* <input
          value={this.state.textValue}
          type="text"
          onChange={this.handleChange.bind(this)}
        /> */}
        <input type="text" onInput={this.handleChange.bind(this)} />
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      console.log(this.state.textValue);
    }, 3000);
  }
}

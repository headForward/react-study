import React from "react";

export default class From extends React.Component {
  state = {
    value: "",
  };
  constructor(props) {
    super(props);
  }
  handleChange = () => {
    return (e) => {
      console.log("e", e);
      this.setState({
        value: e.target.value,
      });
    };
  };
  handleKeyUp = () => {
    return (e) => {
      console.log(e);
      if (e.keyCode == 13) {
        this.props.onHandleKeyUp(this.state.value);
        this.setState({
          value: "",
        });
      }
    };
  };
  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange()}
        onKeyUp={this.handleKeyUp()}
      />
    );
  }
}

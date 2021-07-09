import React from "react";

export default class App extends React.Component {
  state = {
    textValue: "",
    textareaValue: "",
    selectValue: 0,
  };
  handleChange = () => {
    return (e) => {
      console.log("e", e.target.value);
      this.setState({
        textValue: e.target.value,
      });
    };
  };
  handleSubmit = () => {
    return (e) => {
      console.log("textValue", this.state.textValue);
      console.log("textareaValue", this.state.textareaValue);
      e.preventDefault();
    };
  };
  handleTextareaChange = () => {
    return (e) => {
      console.log("e", e.target.value);
      this.setState({
        textareaValue: e.target.value,
      });
    };
  };
  selectChange = () => {
    return (e) => {
      console.log("e", e.target.value);
      this.setState({
          selectValue:e.target.value
      })
    };
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit()}>
        <input
          onChange={this.handleChange()}
          type="text"
          value={this.state.textValue}
        />
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.textareaValue}
          onChange={this.handleTextareaChange()}
        ></textarea>
        <br />
        <select
          name=""
          id=""
          value={this.state.selectValue}
          onChange={this.selectChange()}
        >
          <option value="0">北京</option>
          <option value="1">上海</option>
          <option value="2">深圳</option>
        </select>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

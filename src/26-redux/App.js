import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateProps = (state) => {
  return state;
};

const mapDispatchProps = (dispatch) => {
  return {
    addCount() {
      dispatch({ type: "add" });
    },
    minusCount() {
      dispatch({ type: "minus" });
    },
  };
};

@connect(mapStateProps, mapDispatchProps)
class App extends Component {
  handleClick = () => {
    this.props.addCount();
  };
  handleClick1 = () => {
    this.props.minusCount();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>-1</button>
        {this.props.count}
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
  componentDidMount() {
    console.log(this);
  }
}

export default App;

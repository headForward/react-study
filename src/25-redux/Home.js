import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    addCount() {
      dispatch({ type: "add" });
    },
  };
};

@connect(mapStateProps, mapDispatchProps)
class Home extends Component {
  handleClick = () => {
    this.props.addCount();
  };
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
  componentDidMount() {
    console.log(this);
  }
}

export default Home;

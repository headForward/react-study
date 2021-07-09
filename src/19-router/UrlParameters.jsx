import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Child extends React.Component {
  render() {
  return <div>{this.props.match.params.id}</div>;
  }
  componentDidMount(){
        console.log(this);
  }
}

class UrlParameters extends Component {
  render() {
    return (
      <div>
          <Link to="/aaa">aaa</Link>
          <Link to="/bbb">bbb</Link>
          <Link to="/ccc">ccc</Link>
        <Route path="/:id" exact component={Child}></Route>
      </div>
    );
  }
}

export default UrlParameters;

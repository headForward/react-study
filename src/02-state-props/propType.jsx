import React from "react";
import PropTypes from "prop-types";

let { node } = PropTypes;
class Child extends React.Component {
  static propTypes = {
    title: node,
  };
  render() {
    return <div>Child {this.props.title}</div>;
  }
}

class AAA extends React.Component {
  render() {
    return <div>AAA</div>;
  }
}

export default class PropType extends React.Component {
  render() {
    return (
      <div>
        <Child title={<AAA></AAA>}></Child>
      </div>
    );
  }
}

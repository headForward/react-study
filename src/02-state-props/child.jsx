import React, { Component } from "react";

// export default class child extends Component {
//   // static defaultProps = {
//   //     title:'default value'
//   // }
//   render() {
//     return <div>child {this.props.title}</div>;
//   }
// }
// child.defaultProps = {
//   title: "defaultProps value",
// };

export default function Child(props) {
  return (
    <>
      <div>child {props.title}</div>
      {props.children}
    </>
  );
}

Child.defaultProps = {
  title: "defaultProps value",
};

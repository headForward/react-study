import React from "react";
import style from "./ClassName.css";
import classNames from "classnames/bind";

let cx = classNames.bind(style);

class ClassNames extends React.Component {
  render() {
    console.log("props", this.props);
    let className = cx({
      red: this.props.title == "red",
      green: this.props.title == "green",
    });
    return <div className={className}>hello word</div>;
  }
}

export default ClassNames;

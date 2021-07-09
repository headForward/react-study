import React, { Component, Fragment } from "react";
import styles from "./style.css";
import classNames from "classnames/bind";
import { DivContainer } from "./styledCss";

let cx = classNames.bind(styles);

class ClassStyle extends Component {
  render() {
    let className = cx({
      font: false,
    });
    return (
      <Fragment>
        <div className={className}>hello</div>
        <DivContainer>world</DivContainer>
      </Fragment>
    );
  }
}

export default ClassStyle;

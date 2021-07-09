import React from "react";

export default function Child1(props) {
  return <div onClick={props.onReceiveData.bind(this, "hello")}>Child1</div>;
}

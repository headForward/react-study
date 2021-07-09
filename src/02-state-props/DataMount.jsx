import React from "react";
import Child from "./child";

export default class DataMount extends React.Component {
  render() {
    return (
      <>
        <div>data</div>
        <Child>
          <div>slot</div>
        </Child>
      </>
    );
  }
}

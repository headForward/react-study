import React, { Component } from "react";

const data = "<h1>hello</h1>";
class App extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
  }
}

export default App;

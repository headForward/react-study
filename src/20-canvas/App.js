import React, { Component } from "react";

class App extends Component {
  render() {
    return <div id="canvas"></div>;
  }
  componentDidMount() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var image = new Image();
    image.src = "dragon.jpg";
    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);
    };
  }
}

export default App;

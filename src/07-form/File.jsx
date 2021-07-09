import React from "react";

export default class File extends React.Component {
  constructor(props) {
    super(props);
    this.file = React.createRef();
  }
  handleClick = () => {
    return (e) => {
        console.log("file",this.file.current.files[0].name);
    };
  };
  render() {
    return (
      <div>
        <input type="file" ref={this.file} />
        <button onClick={this.handleClick()}>get fileName</button>
      </div>
    );
  }
}

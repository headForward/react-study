import React from "react";

export default class State extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isShow: true,
  //     };
  //   }
  state = {
    isShow: true,
    count: 0,
    list: ["a", "b", "c"],
  };
  render() {
    return (
      <div>
        {this.state.isShow && <div>state{this.state.count}</div>}
        <ul>
          {this.state.list.map((value) => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    // setTimeout(() => {
    // this.setState(
    //   (prevState) => {
    //     return {
    //       count: prevState.count + 1,
    //     };
    //   },
    //   () => {
    //     console.log(document.querySelector("#root").innerHTML);
    //   }
    // );

    // }, 3000);
    // this.state.list.push('d')
    // this.setState({})
    let list = this.state.list;
    list.push("d");
    this.setState((proState) => {
      return {
        list: list
      };
    });
  }
}

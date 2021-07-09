import react from "react";
import Child from "./child";

class Parent extends react.Component {
  state = {
    name: "我是父组件",
    msg: "父组件传值给子组件",
    childMsg: "",
  };

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <div>子组件传值：{this.state.childMsg}</div>
        <Child ref="child"></Child>
      </div>
    );
  }
  componentDidMount(nextProps) {
    console.log("111");
    console.log("refs", this.refs["child"]);
    this.setState({
        childMsg:this.refs['child'].state.msg
    })
  }
}

export default Parent;

import react, { Component, createContext } from "react";
const context = createContext();
const { Consumer, Provider } = context;
class ChildA extends Component {
  static contextType = context;
  render() {
    console.log("this", this);
    return <div>childA:{this.context}</div>;
  }
}

class ChildB extends Component {
  static contextType = context;
  render() {
    return (
      <div>
        childB:{this.context}
        <ChildC></ChildC>
      </div>
    );
  }
}

const ChildC = () => {
  return (
    <div>
      ChildC:
      <Consumer>
        {(value) => {
          return <span>{value}</span>;
        }}
      </Consumer>
      <ChildD></ChildD>
    </div>
  );
};

const ChildD = () => {
  return (
    <div>
      ChildD:
      <Consumer>
        {(value) => {
          return <span>{value}</span>;
        }}
      </Consumer>
    </div>
  );
};

export default class App extends Component {
    state={
        value:{
            name:'小红',
            sex:"男"
        }
    }
  render() {
      console.log("state",this.state.value);
    return (
      <Provider value='hello'>
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    );
  }
}

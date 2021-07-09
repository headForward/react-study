import React from "react";
import Form from "./form";
import List from "./list";

export default class TodoList extends React.Component {
  state = {
    list: [],
  };
  handleKeyUp = () => {
    return (val) => {
      console.log("val", val);

      let list = this.state.list;
      list.push({
        id: new Date().getTime(),
        name: val,
      });
      this.setState({
        list,
      });
    };
  };
  handleSpanClick=(id)=>{
      return ()=>{
          console.log("111",id);
          let list = this.state.list
        let arr = list.filter(val=>{
              return val.id!==id 
          })
          console.log("arr",arr);
          this.setState({
              list:arr
          })
      }
  }
  render() {
    return (
      <>
        <Form onHandleKeyUp={this.handleKeyUp()}></Form>
        <List list={this.state.list} onListSpanClick={this.handleSpanClick}></List>
      </>
    );
  }
}

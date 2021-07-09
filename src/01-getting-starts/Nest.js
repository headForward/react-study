import React from "react";

class Header extends React.Component {
  render() {
    return (
        <div>Header</div>
    )
  }
}



class Content  extends React.Component {
    render(){
        return(
            <div>Content</div>
        )
    }
}

export default class App extends React.Component{
    render() {
        return (
         <>
             <Header></Header>
             <Content></Content>
         </>
        );
    }
}
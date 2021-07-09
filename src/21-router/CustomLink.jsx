import react from "react";
import { Route, Link, withRouter } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
@withRouter
class Child extends react.Component {
  state = {
    arr: [
      {
        id: 1,
        name: "home",
      },
      {
        id: 2,
        name: "about",
        
      },
    ],
  };
  
  handleClick=(path)=>{
      return ()=>{
          console.log("path",path);
          this.props.history.push(`/${path}`)
      }
  }
  render() {
    return (
      <>
        {this.state.arr.map((val) => {
          var { id, name } = val;
          return (
            <li onClick={this.handleClick(name)} key={id}>
              {this.props.location.pathname === `/${name}` ? ">" : ""}
              {name}
            </li>
          );
        })}
      </>
    );
  }
  componentDidMount() {
    console.log(this);
  }
}

class CustomLink extends react.Component {
  render() {
    return (
      <div>
        <ul>
          <Child></Child>
        </ul>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    );
  }
}

export default CustomLink;

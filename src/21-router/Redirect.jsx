import react from "react";
import { Route, NavLink,Redirect } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
class App extends react.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
      </div>
    );
  }
}

export default App;

import react from "react";
import From from "../18-redux/From";
import { Route, Link } from "react-router-dom";
const Home = ()=><div>home</div>
const About = ()=><div>About</div>
class App extends react.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    );
  }
}

export default App;

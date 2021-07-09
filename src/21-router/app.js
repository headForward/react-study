import react from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const DashBord = () => <div>DashBord</div>;

class App extends react.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/DashBord">DashBord</Link>
          </li>
        </ul>
        <Route path="/" exact component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/DashBord" component={DashBord}></Route>
      </>
    );
  }
}

export default App;

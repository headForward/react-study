import react from "react";
import { Route, Link, Switch } from "react-router-dom";

// const Home = () => <h1>Home</h1>;
class Home extends react.Component {
  render() {
    return <h1>Home</h1>;
  }
  componentDidMount() {
    console.log(this);
  }
}

const Rendering = () => <h3>rendering</h3>;
const Components = () => <h3>Components</h3>;
const propsVstate = () => <h3>props-v-state</h3>;

class Topics extends react.Component {
  render() {
    return (
      <>
        <h1>Topics</h1>
        <ul>
          <li>
            <Link to="/topics/rendering">Rendering with React</Link>
          </li>
          <li>
            <Link to="/topics/components">Components</Link>
          </li>
          <li>
            <Link to="/topics/props-v-state">Props v. State</Link>
          </li>
        </ul>
        <Route path="/topics/rendering" component={Rendering}></Route>
        <Route path="/topics/components" component={Components}></Route>
        <Route path="/topics/props-v-state" component={propsVstate}></Route>
      </>
    );
  }
}

class App extends react.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics/rendering">Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/topics" component={Topics}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

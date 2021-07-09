import react from "react";

import { Route, Link, Switch } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Rendering = () => <h3>rendering</h3>;
const Components = () => <h3>components</h3>;
const Props = () => <h3>props-v-state</h3>;

class Topics extends react.Component {
  render() {
    console.log(this);
    let path = this.props.match.path;
    return (
      <div>
        <h1>Topics</h1>
        <ul>
          <li>
            <Link to={`${path}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${path}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${path}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Route path={`${path}/rendering`} component={Rendering}></Route>
        <Route path={`${path}/components`} component={Components}></Route>
        <Route path={`${path}/props-v-state`} component={Props}></Route>
      </div>
    );
  }
}

class Nesting extends react.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Topics/rendering">Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Topics" component={Topics}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default Nesting;

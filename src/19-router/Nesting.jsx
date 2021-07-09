import React, { Component } from "react";
import { Route, Link, useRouteMatch, Switch } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};
const Rendering = () => {
  return <div>Rendering</div>;
};
const Components = () => {
  return <div>Components</div>;
};
const PropsState = () => {
  return <div>Props v. State</div>;
};
const Topics = (props) => {
  console.log(props);
  let { url } = props.match;
  console.log("url", url);
  return (
    <>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/Components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/PropsState`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${url}/rendering`} component={Rendering}></Route>
        <Route path={`${url}/Components`} component={Components}></Route>
        <Route path={`${url}/PropsState`} component={PropsState}></Route>
      </Switch>
    </>
  );
};

class Nesting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
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

export default Nesting;

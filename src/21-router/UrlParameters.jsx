import react from "react";
import { Route, Link } from "react-router-dom";

const Child = (props) => {
  console.log("props", props);
  return <div>{props.match.params.id}</div>;
};

class UrlParameters extends react.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/aaa">aaa</Link>
          </li>
          <li>
            <Link to="/bbb">bbb</Link>
          </li>
          <li>
            <Link to="/ccc">ccc</Link>
          </li>
        </ul>
        <Route path="/:id" component={Child}></Route>
      </div>
    );
  }
}

export default UrlParameters;

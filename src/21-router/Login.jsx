import react from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";

const Public = () => <h3>Public</h3>;
const Logged = () => <div>You are not logged in</div>;
const Protected = () => <h3>Protected</h3>;
class Welcome extends react.Component {
  handleClick = () => {
    console.log("111");
    this.props.welcomeSetFlag(!this.props.flag);
  };
  render() {
    return (
      <div>
        <span>Welcome!</span>
        <button onClick={this.handleClick}>Sign out</button>
      </div>
    );
  }
}
class Login extends react.Component {
  handleClick = () => {
    console.log("1111");
    this.props.setFlag(!this.props.flag);
  };
  render() {
    console.log(this);
    return (
      <div>
        <div>You must log in to view the page at/protected</div>
        <button onClick={this.handleClick}>Login in</button>
      </div>
    );
  }
}
@withRouter
class App extends react.Component {
  state = {
    flag: false,
  };
  handleSetFlag = (value) => {
    console.log("value", this);
    this.props.history.replace("/protected");
    this.setState({
      flag: value,
    });
  };
  welcomeSetFlag = (value) => {
    console.log("value", value);
    this.setState({
      flag: value,
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        {this.state.flag ? (
          <Welcome
            flag={this.state.flag}
            welcomeSetFlag={this.welcomeSetFlag}
          ></Welcome>
        ) : (
          <Logged></Logged>
        )}
        <ul>
          <li>
            <NavLink to="/public">Public Page</NavLink>
          </li>
          <li>
            <NavLink to="/protected">Protected Page</NavLink>
          </li>
        </ul>
        <Route path="/public">
          <Public></Public>
        </Route>
        <Route path="/login">
          <Login flag={this.state.flag} setFlag={this.handleSetFlag}></Login>
        </Route>
        <Route path="/protected">
          {this.state.flag ? (
            <Protected></Protected>
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
      </div>
    );
  }
}

export default App;

import react from "react";
import { Route, NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

const App = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bubblegum">bubblegum</NavLink>
          </li>
          <li>
            <NavLink to="/shoelaces">shoelaces</NavLink>
          </li>
        </ul>
        {routes.map((val) => {
          return (
            <Route
              path={val.path}
              component={val.sidebar}
              exact={val.exact}
            ></Route>
          );
        })}
      </div>
      <div>
        {routes.map((val) => {
          return (
            <Route
              path={val.path}
              component={val.main}
              exact={val.exact}
            ></Route>
          );
        })}
      </div>
    </div>
  );
};

export default App;

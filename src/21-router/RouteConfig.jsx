import react from "react";
import { NavLink, Route } from "react-router-dom";

const Sandwiches = () => <div>Sandwiches</div>;
const Tacos = (props) => {
  console.log("props", props);
  return (
    <>
      <div>Tacos</div>
      <ul>
        <li>
          <NavLink to="/tacos/bus">Bus</NavLink>
        </li>
        <li>
          <NavLink to="/tacos/cart">Cart</NavLink>
        </li>
      </ul>
      {props.routes.map((val) => {
        return (
          <Route path={val.path}>
            <val.component />
          </Route>
        );
      })}
    </>
  );
};
const Bus = () => <div>Bus</div>;
const Cart = () => <div>Cart</div>;
const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches,
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus,
      },
      {
        path: "/tacos/cart",
        component: Cart,
      },
    ],
  },
];

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/tacos">Tacos</NavLink>
        </li>
        <li>
          <NavLink to="/sandwiches">Sandwiches</NavLink>
        </li>
      </ul>
      {routes.map((val) => {
        return (
          <Route path={val.path}>
            <val.component routes={val.routes} />
          </Route>
        );
      })}
    </div>
  );
};

export default App;

import react from "react";
import {
  Route,
  Redirect,
  Switch,
  NavLink,
  useParams,
  useLocation,
} from "react-router-dom";
const Home = () => {
  let { id } = useParams();
  return <div>Home {id}</div>;
};
const About = () => {
  let {
    state: { id },
  } = useLocation();
  return <div>About {id}</div>;
};

const Page404 = () => {
  return <div>Page404</div>;
};

const Search = () => {
  let { search } = useLocation();
  console.log("search", search);
  let query = new URLSearchParams(search);
  console.log(query.get("id"));
  return <div>search: {query.get("id")}</div>;
};

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home/12">Home</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/about", state: { id: 123 } }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/search?id=123">search</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/home/:id" component={Home}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect from="/" exact to="/home"></Redirect>
        <Route path="*" component={Page404}></Route>
      </Switch>
    </div>
  );
};

export default App;

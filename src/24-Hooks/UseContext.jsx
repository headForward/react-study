import react, { createContext, useContext } from "react";

let nameContext = createContext({ name: "zhangsan" });
let { Provider, Consumer } = nameContext;

let Home = (props) => {
  let x = useContext(nameContext);
  console.log("x", x);
  return <div>{x}</div>;
};
export default function () {
  let x = useContext(nameContext);
  return (
    <Provider value={x.name}>
      <Home></Home>
    </Provider>
  );
}

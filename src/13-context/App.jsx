import react from "react";
import { CountText } from "./Count";
import Child from "./Child";
import ChildHood from "./ChildHood";

class App extends react.Component {
  render() {
    return (
      <>
        <CountText>
          <Child></Child>
          <ChildHood></ChildHood>
        </CountText>
      </>
    );
  }
}

export default App;

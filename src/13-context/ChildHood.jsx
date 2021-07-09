import react from "react";
import { CountConsumer } from "./Count";

class ChildHood extends react.Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {({count,add}) => {
            return (
              <div>
                <div>{count}</div>
                <button onClick={()=>add(3)}>+</button>
              </div>
            );
          }}
        </CountConsumer>
      </div>
    );
  }
}

export default ChildHood;

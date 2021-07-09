import react from "react";
import { Map } from "immutable";
class App extends react.Component {
  render() {
    let map1 = Map({
      a: 0,
      b: 1,
    });
    let map2 = map1.set('a',100)
    console.log("map2",map2.get("a"));
    console.log("map1",map1.get('a'));

    return <div>immutable</div>;
  }
}

export default App;

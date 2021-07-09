import react, { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);
  function handleClick() {
    setCount((count) => {
      return count + 1;
    });
  }
  return (
    <div>
      {count}
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default UseState;

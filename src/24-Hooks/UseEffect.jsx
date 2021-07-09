import react, { useState, useEffect } from "react";

export default function () {
  let [data, setData] = useState({ count: 0 });
  function handleClick() {
    setData((data) => {
      //   console.log("data", data);
      return { count: data.count + 1 };
    });
  }
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [data]);
  useEffect(() => {
    console.log("componentDidMount");
    fetch("/position.json")
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        // dispatch(setList(result.result));
      });
    return () => {
      console.log("componentWillMount");
    };
  }, []);
  return (
    <div>
      {data.count}
      <button onClick={handleClick}>add</button>
    </div>
  );
}

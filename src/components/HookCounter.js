import React, { useState, useEffect } from "react";

function HookCounter(props) {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("name");
  useEffect(() => {
    console.log("Effect is running ....");
  }); // sync every state

  useEffect(() => {
    console.log("Effect sync no state");
  }, [name, counter]); // sync no state == componentDidMount()

  useEffect(() => {
    console.log("counter has been changed !");
    // do something
    return () => {
      // cleanup funtion
      // cancel network request
      // clearInterval(timerId)
      // == componentWillUnmount()
    };
  }, [counter]); // if counter changed run this effect
  // componentDidUpdate()

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default HookCounter;

import React from "react";
import Child from "./Child";
import Child2 from "./Child2";

const Parent = () => {
  const brad = {
    name: "brad",
    age: 24,
    isAlive: false,
    location: "New York",
  };
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Parent Component</h1>
      <Child user={brad} />
      {/* <Child name="tenny" age={23} isAlive={true} /> */}
      <Child2 name="tenny" age={23} />
    </div>
  );
};

export default Parent;

import React from "react";

const Child = ({ user }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow ",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>Hello {user.name}</h1>
      <h3>Age {user.age}</h3>
      <h3>{user.isAlive ? "Alive" : "Dead"}</h3>
      <h4>Location: {user.location}</h4>
    </div>
  );
};

export default Child;

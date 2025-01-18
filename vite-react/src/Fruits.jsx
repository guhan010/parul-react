import React from "react";
import Card from "./Card";

const Fruits = () => {
  const users = [
    {
      name: "brad",
      age: 23,
      isAlive: false,
    },
    {
      name: "nitheesh",
      age: 21,
      isAlive: true,
    },
    {
      name: "dhruvin",
      age: 21,
      isAlive: true,
    },
    {
      name: "yashwanth",
      age: 23,
      isAlive: true,
    },
    {
      name: "dinesh",
      age: 21,
      isAlive: true,
    },
    {
      name: "dhruv",
      age: 21,
      isAlive: true,
    },
  ];

  const alerting = (name) => {
    alert(`user ${name} is clicked`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      {users.map((elem, i) => {
        return <Card ele={elem} clicking={alerting} />;
      })}
    </div>
  );
};

export default Fruits;

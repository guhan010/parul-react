import React from "react";

const Card = ({ ele, clicking }) => {
  ele.name = "sdfds";
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "beige",
      }}
      onClick={() => {
        clicking(ele.name);
      }}
    >
      <h1>{ele.name}</h1>
      <h3>{ele.age}</h3>
      <h2
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          border: "2px solid none",
          borderRadius: "5px",
        }}
      >
        {ele.isAlive ? "Alive" : "Dead"}
      </h2>
    </div>
  );
};

export default Card;

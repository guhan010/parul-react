import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Mail from "../components/Mail";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <Mail />
    </div>
  );
};

export default Home;

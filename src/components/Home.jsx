import React, { useContext } from "react";
import Tasks from "./Tasks";
import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Login />
      {/* <Tasks /> */}
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;

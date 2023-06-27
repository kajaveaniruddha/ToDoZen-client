import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskState from "./context/task/TaskState";
import Register from "./components/Register";
import User from "./components/User";

function App() {
  return (
    <>
      <Router>
        {/* used routes so that it particularly renders required component */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

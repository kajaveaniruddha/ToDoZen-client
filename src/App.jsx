import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import User from "./components/User";
import { ToastContainer } from "react-toastify";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <>
      <Router>
        {/* used routes so that it particularly renders required component */}
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/user" element={<User />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

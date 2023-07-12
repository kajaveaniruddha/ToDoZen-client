import React, { useState } from "react";
import ShowTasks from "./ShowTasks";
import TaskState from "../context/task/TaskState";
import AddTask from "./AddTask";
import AssigneeState from "../context/task/AssigneeState";
import { useNavigate } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const User = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [showForm, setShowform] = useState(false);
  const toggleForm = () => {
    setShowform(!showForm);
  };

  return (
    <div className="min-h-screen w-full">
      <div
        className="fixed z-0 w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://cdn.naturettl.com/wp-content/uploads/2020/02/10184405/How-to-Photograph-Mountains-5-800x533.jpg')",
        }}
      ></div>
      {/* <div className="fixed inset-0 z-0 bg-gradient-to-r from-indigo-950 to-fuchsia-950 min-w-min ">
        <div className="absolute inset-0 flex justify-evenly items-center blur-3xl opacity-50 ">
          <div className="w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30" />
          <div className="w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30" />
        </div>
      </div> */}
      <div className="fixed top-0 z-20 flex justify-end w-full bg-black bg-opacity-20 pb-3">
        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            onClick={handleLogout}
            className="text-white mt-2 mr-5 font-semibold text-base hover:scale-105 ease-in-out duration-200"
          >
            <FontAwesomeIcon icon={faPowerOff} /> Logout
          </button>
        </motion.div>
      </div>
      <TaskState>
        <AssigneeState>
          <div className="flex ">
            <div className="fixed top-1/2 h-fit z-20">
              <LeftNavbar toggleForm={toggleForm} />
            </div>
            {showForm && (
              <motion.div
                className=" w-full flex justify-center"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
              >
                <AddTask />
              </motion.div>
            )}
            <div className="w-full flex justify-center mb-3">
              <ShowTasks />
            </div>
          </div>
        </AssigneeState>
      </TaskState>
    </div>
  );
};

export default User;

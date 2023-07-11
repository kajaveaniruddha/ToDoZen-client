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
          backgroundImage: "url('https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?t=st=1689107706~exp=1689111306~hmac=b49e99f1c0c1dee42a4f414d43ead7ec2b4f599ca8a8a3fe43fe26a0773c9b16&w=996')"
        }}
      >
      </div>
      {/* <div className="fixed inset-0 z-0 bg-gradient-to-r from-indigo-950 to-fuchsia-950 min-w-min ">
        <div className="absolute inset-0 flex justify-evenly items-center blur-3xl opacity-50 ">
          <div className="w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30" />
          <div className="w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30" />
        </div>
      </div> */}
      <div className="fixed top-0 z-20 flex justify-end w-full bg-black bg-opacity-20 pb-3">
        <button
          onClick={handleLogout}
          className="text-white mt-2 mr-5 font-semibold text-base"
        >
          <FontAwesomeIcon icon={faPowerOff} /> Logout
        </button>
      </div>
      <TaskState>
        <AssigneeState>
          <div className="flex">
            <div className="sticky top-1/2 h-fit z-20">
              <LeftNavbar toggleForm={toggleForm} />
            </div>
            {showForm && (
              <motion.div
                className=" w-full flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
              >
                <AddTask />
              </motion.div>
            )}
            <div className="w-full flex justify-center">
              <ShowTasks />
            </div>
          </div>
        </AssigneeState>
      </TaskState>
    </div>
  );
};

export default User;

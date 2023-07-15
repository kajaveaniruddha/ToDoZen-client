import React, { useRef, useState } from "react";
import ShowTasks from "./ShowTasks";
import TaskState from "../context/TaskState";
import AddTask from "./AddTask";
import AssigneeState from "../context/AssigneeState";
import { useNavigate } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const User = () => {
  const constraintParent = useRef();
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
    <>
      <div className="min-h-screen w-full">
        <div
          className="fixed inset-0 z-0 bg-[#110f29] min-w-min "
          ref={constraintParent}
        />
        <div className="fixed top-0 z-20 flex justify-end w-full bg-[#060517] bg-opacity-50 pb-3">
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
            <div className="flex-row md:flex">
              <motion.div
                className="fixed top-1/2 h-fit z-20"
                drag
                dragConstraints={constraintParent}
              >
                <LeftNavbar toggleForm={toggleForm} />
              </motion.div>
              <AnimatePresence>
                {showForm && (
                  <motion.div
                    className=" w-full flex justify-center"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <AddTask />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="w-full flex justify-center mb-3">
                <ShowTasks />
              </div>
            </div>
          </AssigneeState>
        </TaskState>
      </div>
    </>
  );
};

export default User;

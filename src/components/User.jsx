import React from "react";
import Tasks from "./Tasks";
import TaskState from "../context/task/TaskState";
import AddTask from "./AddTask";
import { useNavigate } from "react-router-dom";
const User = () => {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate("/");
    }
  return (
    <div className=" bg-slate-200">
      <button onClick={handleLogout} className=" border-2 p-3 mx-5 my-2 bg-slate-50">Logout</button>
      <TaskState>
        <AddTask />
        <Tasks />
      </TaskState>

    </div>
  );
};

export default User;

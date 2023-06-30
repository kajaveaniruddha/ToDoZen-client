import { useContext, useEffect, useRef, useState } from "react";
import {Taskcontext} from "../context/task/Taskcontext";
const useTaskEdit = () => {
  const context = useContext(Taskcontext);
  const { fetchTask, editTask } = context;

  useEffect(() => {
    fetchTask();
  }, []);

  const [visibility, setVisibility] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    id: "",
    etitle: "",
    edescription: "",
  });
  const updatetask = (currentTask) => {
    setUpdatedTask({
      id: currentTask._id,
      etitle: currentTask.title,
      edescription: currentTask.description,
    });
    refi.current.click();
  };

  const refi = useRef(null);

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editTask(updatedTask.id, updatedTask.etitle, updatedTask.edescription);
    setVisibility(false);
  };

  return {
    visibility,
    setVisibility,
    updatedTask,
    updatetask,
    refi,
    handleChange,
    handleClick,
  };
};

export default useTaskEdit;

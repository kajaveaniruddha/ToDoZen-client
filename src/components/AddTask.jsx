import React, { useContext } from "react";
import { Taskcontext } from "../context/task/Taskcontext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AddTask = () => {
  const context = useContext(Taskcontext);
  const { addTask } = context;
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    addTask(newTask.title, newTask.description);
    setNewTask({ title: "", description: "" });
  };
  return (
    <form
      className=" h-fit z-10 bg-black bg-opacity-25 rounded-xl backdrop-blur border-2 border-black border-opacity-5 drop-shadow-lg ml-5 mt-16 sticky top-16 w-full "
      action="submit"
      method="POST"
      onSubmit={handleClick}
    >
      <div className="flex w-full">
        <div className="w-full flex justify-start">
          <label
            htmlFor="title"
            className="text-white mt-2 ml-3 font-semibold text-base"
          >
            NEW TASK -
          </label>
          <input
            id="title"
            name="title"
            type="title"
            autoComplete="title"
            value={newTask.title}
            required
            onChange={handleChange}
            minLength={2}
            placeholder="Untitled"
            className="bg-black bg-opacity-0 text-white p-2"
          />
        </div>
        <button
          type="submit"
          className=" border-2 rounded bg-black bg-opacity-10 text-white focus:border-inherit px-2 mx-8 mt-2 hover:scale-105 active:scale-90"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="flex flex-col m-3">
        <textarea
          id="description"
          name="description"
          type="description"
          autoComplete="current-description"
          value={newTask.description}
          required
          onChange={handleChange}
          minLength={5}
          placeholder="Description"
          className=" border-2 h-60 border-white/10 rounded bg-black bg-opacity-10 text-white focus:border-auto p-2 max-w-full max-h-full resize-y "
        />
      </div>
    </form>
  );
};

export default AddTask;

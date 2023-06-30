import React, { useContext } from "react";
import {Taskcontext} from "../context/task/Taskcontext";
import { useState } from "react";
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
    <div>
      <form className="space-y-6 ml-5 max-w-md" action="submit" method="POST">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            title
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="title"
              autoComplete="title"
              value={newTask.title}
              required
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              description
            </label>
          </div>
          <div className="mt-2">
            <input
              id="description"
              name="description"
              type="description"
              autoComplete="current-description"
              value={newTask.description}
              required
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleClick}
            disabled={newTask.title.length <= 2 || newTask.description.length <= 5}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;

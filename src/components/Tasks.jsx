import React, { useContext, useEffect, useRef, useState } from "react";
import Taskcontext from "../context/task/Taskcontext";
import Taskitem from "./Taskitem";
import Modal from "./Modal";

const Tasks = () => {
  //fetch-all
  const context = useContext(Taskcontext);
  const { tasks, fetchTask, editTask } = context;
  useEffect(() => {
    fetchTask();
  }, []);

  //update
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
    // console.log("updating task", updatedTask);
    editTask(updatedTask.id, updatedTask.etitle, updatedTask.edescription);
    setVisibility(false);
  };
  return (
    <>
      {/* Modal */}
      <div>
        <button
          ref={refi}
          className="border-s displa hidden"
          onClick={() => setVisibility(true)}
        >
          Modal
        </button>
        <Modal visible={visibility} onClose={() => setVisibility(false)}>
          {/* form */}
          <div>
            <form
              className="space-y-6 ml-5 max-w-md"
              action="submit"
              method="PUT"
            >
              <div>
                <label
                  htmlFor="etitle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  etitle
                </label>
                <div className="mt-2">
                  <input
                    value={updatedTask.etitle}
                    id="etitle"
                    name="etitle"
                    type="etitle"
                    autoComplete="etitle"
                    required
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="edescription"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    edescription
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={updatedTask.edescription}
                    id="edescription"
                    name="edescription"
                    type="edescription"
                    autoComplete="current-edescription"
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
                  disabled={
                    updatedTask.etitle.length <= 2 ||
                    updatedTask.edescription.length <= 5
                  }
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <div className="flex my-3 flex-wrap">
        {tasks.length === 0 && "Create a Task to display"}
        {tasks.map((iterator) => {
          return (
            <Taskitem
              key={iterator._id}
              iterator={iterator}
              updatetask={updatetask}
            />
          );
        })}
      </div>
    </>
  );
};

export default Tasks;

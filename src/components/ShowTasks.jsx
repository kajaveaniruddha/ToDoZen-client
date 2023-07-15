import { useContext, useEffect, useState } from "react";
import { Taskcontext } from "../context/Taskcontext";
import TaskComponent from "./TaskComponent";
import Modal from "./Modal";
import useTaskEdit from "../hooks/useTaskEdit";

const ShowTasks = () => {
  //fetch-all
  const context = useContext(Taskcontext);
  const { tasks } = context;
  const {
    visibility,
    setVisibility,
    updatedTask,
    updatetask,
    refi,
    handleChange,
    handleClick,
  } = useTaskEdit(); 
  return (
    <>{
      <div className="w-full mt-12 ">
        {/* Modal for editing a task*/}
        <div>
          <button
            ref={refi}
            className="border-s hidden"
            onClick={() => setVisibility(true)}
          >
            Modal
          </button>
          <Modal visible={visibility} onClose={() => setVisibility(false)}>
            {/* form */}
            <form
              className="space-y-6 w-96 h-max  "
              action="submit"
              method="PUT"
            >
              <div className="flex flex-col m-3">
                <label
                  htmlFor="etitle"
                  className="text-white mt-5 font-semibold text-base"
                >
                  Edit Title
                </label>
                <input
                  value={updatedTask.etitle}
                  id="etitle"
                  name="etitle"
                  type="etitle"
                  autoComplete="etitle"
                  required
                  onChange={handleChange}
                  className="border-2 border-white/10 rounded p-2 bg-white bg-opacity-10 text-white text-base focus:border-inherit"
                />
                <label
                  htmlFor="edescription"
                  className="text-white mt-5 font-semibold text-base"
                >
                  Edit Description
                </label>
                <textarea
                  value={updatedTask.edescription}
                  id="edescription"
                  name="edescription"
                  type="edescription"
                  autoComplete="current-edescription"
                  required
                  onChange={handleChange}
                  className=" border-2 h-max w-full border-white/10 rounded bg-white bg-opacity-10 text-white focus:border-auto p-2 max-w-full max-h-full resize-y "
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" active:scale-95 mt-10 w-full py-3 rounded-md bg-gradient-to-tr from-pink-500 to-pink-600 text-lg text-white font-semibold drop-shadow-md hover:drop-shadow-xl hover:scale-105 transition-transform"
                    onClick={handleClick}
                    disabled={
                      updatedTask.etitle.length <= 2 ||
                      updatedTask.edescription.length <= 5
                    }
                  >
                    Update Task
                  </button>
                </div>
              </div>
            </form>
          </Modal>
        </div>

        <div id="list" className="flex flex-wrap">
          {tasks.length === 0 && "Create a Task to display"}
          {tasks.slice(0).reverse().map((iterator, i) => {
            return (
              <TaskComponent
                i={i}
                key={iterator._id}
                iterator={iterator}
                updatetask={updatetask}
              />
            );
          })}
        </div>
      </div>}
    </>
  );
};

export default ShowTasks;

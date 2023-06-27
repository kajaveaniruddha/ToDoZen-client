import React from "react";
import { useState } from "react";
import Taskcontext from "./Taskcontext";
const host="http://localhost:5500"
const TaskState = (props) => {
  const initialTasks = [];
  const [tasks, setTasks] = useState(initialTasks);

  //fetch all tasks
  const fetchTask = async () => {
    try {
      const response = await fetch(`${host}/alltasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      console.log(response);
      setTasks(json);
    } catch (error) {
      console.log(error);
    }
  };

  // add task
  const addTask = async (title, description) => {
    try {
      const response = await fetch(`${host}/addtask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description }),
      });
      const json = await response.json();
      setTasks(tasks.concat(json)); //updated new incoming task
      // console.log("New task added");
    } catch (error) {
      console.log(error);
    }
  };

  // delete task
  const deleteTask = async (id) => {
    const response = await fetch(
      `${host}/deletetask/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    // console.log(json);
    const newTask = tasks.filter((it) => {
      return it._id !== id;
    });
    setTasks(newTask);
    // console.log("Deleted a task: " + id);
  };

  // edit task
  const editTask = async (id, title, description) => {
    // api call
    try {
      const response = await fetch(
        `${host}/edittask/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, description }),
        }
      );
      const json = await response.json();
      // console.log(json)
      let newtask = JSON.parse(JSON.stringify(tasks));
      //logic for editing task
      for (let index = 0; index < newtask.length; index++) {
        if (newtask[index]._id === id) {
          newtask[index].title = title;
          newtask[index].description = description;
          break;
        }
      }
      setTasks(newtask);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Taskcontext.Provider
      value={{ tasks, setTasks, fetchTask, addTask, deleteTask, editTask }}
    >
      {props.children}
    </Taskcontext.Provider>
  );
};

export default TaskState;

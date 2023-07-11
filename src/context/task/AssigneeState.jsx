import React from "react";
import { useState } from "react";
import { Assigneecontext } from "./Taskcontext";
import {
  CreatorIsAssignee,
  AssigneeNotFound,
  Unauthorized,
  InvalidInput,
} from "../../utilities/Toasts";
const host = "http://localhost:5500";

const AssigneeState = (props) => {
  const inititalAssignees = [];
  const [assigneeData, setAssigneeData] = useState(inititalAssignees);
  const initialUsers = [];
  const [users, setUsers] = useState(initialUsers);

  //fetch all assignees of a task
  const fetchAssignees = async (id) => {
    try {
      const response = await fetch(`${host}/allassignees/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      // console.log(json);
      setAssigneeData(json);
    } catch (error) {
      console.log(error);
    }
  };
  //add assignee (id = id of task)
  const addAssignee = async (id, email) => {
    try {
      const response = await fetch(`${host}/addassignee/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ email }),
      });
      const json = await response.json();
      // console.log(json);
      if (response.status === 200) {
        setAssigneeData(json);
      } else if (response.status === 403) {
        CreatorIsAssignee();
      } else if (response.status === 404) {
        AssigneeNotFound();
      } else if (response.status === 401) {
        Unauthorized();
      } else {
        InvalidInput();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // delete assignee
  //idt=id of task
  //emaila=email of assignee
  const deleteAssignee = async (idt, emaila) => {
    const response = await fetch(`${host}/deleteassignee/${idt}/${emaila}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    setAssigneeData(json);
    // console.log("Deleted a task: " + id);
  };

  //fetch available assignees
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${host}/allusers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      // console.log(json);
      setUsers(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Assigneecontext.Provider
      value={{
        assigneeData,
        fetchAssignees,
        addAssignee,
        deleteAssignee,
        users,
        fetchUsers,
      }}
    >
      {props.children}
    </Assigneecontext.Provider>
  );
};

export default AssigneeState;

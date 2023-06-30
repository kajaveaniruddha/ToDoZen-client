import React from "react";
import { useContext, useState } from "react";
import { Assigneecontext } from "../context/task/Taskcontext";

const useAssigneeEdit = () => {
  const context = useContext(Assigneecontext);
  const { addAssignee, fetchAssignees } = context;

  const [visibility, setVisibility] = useState(false);
  const [updatedAssignee, setUpdatedAssignee] = useState({ id: "", email: "" });

  const updateAssignee = (id) => {
    fetchAssignees(id);
    setUpdatedAssignee({ id: id, email: "",key:"" });
    setVisibility(true);
  };

  const handleChange = (e) => {
    setUpdatedAssignee({
      ...updatedAssignee,
      [e.target.name]: e.target.value,
      key: e.target.value,
    });
  };

  const handleClick = (e) => {
    addAssignee(updatedAssignee.id, updatedAssignee.email);
    setUpdatedAssignee({
      id: updatedAssignee.id,
      email: "",
      key:""
    });
  };

  return {
    visibility,
    setVisibility,
    updateAssignee,
    updatedAssignee,
    handleChange,
    handleClick,
  };
};

export default useAssigneeEdit;

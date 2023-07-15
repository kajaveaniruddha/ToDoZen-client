import React from "react";
import { useContext, useState } from "react";
import { Assigneecontext } from "../context/Taskcontext";

const useAssigneeEdit = () => {
  const context = useContext(Assigneecontext);
  const { addAssignee, fetchAssignees } = context;

  const [visibility, setVisibility] = useState(false);
  const [updatedAssignee, setUpdatedAssignee] = useState({ id: "", email: "" });

  const updateAssignee = (id) => {
    fetchAssignees(id);
    setUpdatedAssignee({ id: id, email: "" });
    setVisibility(true);
  };

  const updater = (email) => {
    setUpdatedAssignee({
      ...updatedAssignee,
      email:email
    });
  };

  const handleClick = (e) => {
    addAssignee(updatedAssignee.id, updatedAssignee.email);
    setUpdatedAssignee({
      id: updatedAssignee.id,
      email: "",
    });
  };

  return {
    visibility,
    setVisibility,
    updateAssignee,
    updatedAssignee,
    updater,
    handleClick,
  };
};

export default useAssigneeEdit;

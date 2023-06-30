import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Assigneecontext } from "../context/task/Taskcontext";
const AssigneeComponent = (prop) => {
  const { assignee,iteratorId } = prop;
  const Acontext = useContext(Assigneecontext);
  const {deleteAssignee} = Acontext;
  return (
    <div className=" border-2 border-green-950 bg-yellow-200 my-1">
      <h2 className=" font-semibold">{assignee.name} </h2>
      <p>{assignee.email}<FontAwesomeIcon icon={faTrash} className=" cursor-pointer mx-3" onClick={()=>deleteAssignee(iteratorId,assignee.email)} /></p>
    </div>
  );
};

export default AssigneeComponent;

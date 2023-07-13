import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinusSquare} from "@fortawesome/free-regular-svg-icons"
import { useContext } from "react";
import { Assigneecontext } from "../context/task/Taskcontext";
const AssigneeComponent = (prop) => {
  const { assignee, iteratorId } = prop;
  const Acontext = useContext(Assigneecontext);
  const { deleteAssignee } = Acontext;
  return (
    <div className="w-full border-2 border-black/10 bg-black/20 drop-shadow-md my-1 p-1 mr-2">
      <div className="w-full flex my-1">
        <h2 className="w-1/2 font-semibold">{assignee.name} </h2>
        <div className="w-full flex justify-end">
          <FontAwesomeIcon
            icon={faMinusSquare}
            className="mx-2 cursor-pointer "
            onClick={() => deleteAssignee(iteratorId, assignee.email)}
          />
        </div>
      </div>
      <p>{assignee.email}</p>
    </div>
  );
};

export default AssigneeComponent;

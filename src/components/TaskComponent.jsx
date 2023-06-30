import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faContactCard, faPenToSquare, faPlus, faTrash}from "@fortawesome/free-solid-svg-icons";
import { useContext, useState,useEffect } from "react";
import {Taskcontext,Assigneecontext} from "../context/task/Taskcontext";
import Modal from "./Modal";
import AssigneeComponent from "./AssigneeCompnent";
import useAssigneeEdit from "../hooks/useAssigneeEdit";

const TaskComponent = (prop) => {
  //context for task
  const Tcontext = useContext(Taskcontext);
  const { deleteTask } = Tcontext;
  //context for Assignee
  const Acontext = useContext(Assigneecontext);
  const {assigneeData} = Acontext;
  //custom hook useAssigneeEdit props
  const{visibility,updatedAssignee, setVisibility,updateAssignee, handleChange, handleClick}=useAssigneeEdit();
  //iteration
  const { iterator, updatetask } = prop;

  return (
    <div className=" mx-1 border-4 bg-blue-200">
      <FontAwesomeIcon icon={faTrash} className=" cursor-pointer mx-3" onClick={() => deleteTask(iterator._id)}/>
      <FontAwesomeIcon icon={faPenToSquare} className=" cursor-pointer mx-3" onClick={() => updatetask(iterator)}/>
      <FontAwesomeIcon icon={faContactCard} className=" cursor-pointer mx-3" onClick={() =>updateAssignee(iterator._id)}/>
      <h1>{iterator.title}</h1>
      <p>{iterator.description}</p>
        <Modal visible={visibility} onClose={() => setVisibility(false)}>
          <div>
            <form action="submit" method="post">
              <input placeholder="email" name="email" onChange={handleChange} value={updatedAssignee.email} type="text" required className=" w-3/4"/>
              <FontAwesomeIcon type="submit" icon={faPlus} onClick={handleClick} className=" cursor-pointer mx-3"/>
            </form>
          </div>
            {iterator.assignees.length==0 && "No assignees yet"}
            {assigneeData.map((assignee) => (
              <AssigneeComponent key={assignee.email} assignee={assignee} iteratorId={iterator._id}/>))}
        </Modal>

    </div>
  );
};

export default TaskComponent;

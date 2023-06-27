import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Taskcontext from "../context/task/Taskcontext";

const Taskitem = (prop) => {
  //context
  const context = useContext(Taskcontext);
  const { deleteTask } = context;
  //iteration
  const { iterator,updatetask } = prop

  return (
    <div className=" mx-1 border-4">
 
      <FontAwesomeIcon icon={faTrash} className=" cursor-pointer mx-3" onClick={()=>deleteTask(iterator._id)}/>
      <FontAwesomeIcon icon={faPenToSquare} className=" cursor-pointer mx-3" onClick={()=>updatetask(iterator)} />
      <h1>{iterator.title}</h1>
      <p>{iterator.description}</p>
    </div>
  );
};

export default Taskitem;

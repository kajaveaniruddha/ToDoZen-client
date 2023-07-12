import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faContactCard,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { Taskcontext, Assigneecontext } from "../context/task/Taskcontext";
import Modal from "./Modal";
import AssigneeComponent from "./AssigneeCompnent";
import useAssigneeEdit from "../hooks/useAssigneeEdit";
import { delay, motion } from "framer-motion";

const TaskComponent = (prop) => {
  //context for task
  const Tcontext = useContext(Taskcontext);
  const { deleteTask } = Tcontext;
  //context for Assignee
  const Acontext = useContext(Assigneecontext);
  const { assigneeData, users, fetchUsers } = Acontext;
  //custom hook useAssigneeEdit props
  const { visibility, setVisibility, updateAssignee, updater, handleClick } =
    useAssigneeEdit();
  //iteration
  const { iterator, updatetask,i } = prop;

  //creating filter of available assignees
  const [isListOpen, setIsListOpen] = useState(false);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers(); //all possible assignees
    handleTaskCreator(iterator.creator);
  }, [iterator._id]);

  const handleChange = (e) => {
    setInput(e.target.value);
    const temp = users.filter((user) => {
      return user.email.includes(e.target.value);
    });
    setFilteredUsers(temp);
  };
  const handleList = () => {
    setIsListOpen(true);
  };
  const handleItemClick = (email) => {
    setInput(email);
    updater(email);
    setIsListOpen(false);
  };
  //fetching task creator
  const [taskCreator, setTaskCreator] = useState();
  const handleTaskCreator = (creator_id) => {
    const tempCreator = users.find((user) => user._id === creator_id);
    if (tempCreator) {
      setTaskCreator(tempCreator);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0,translateX:-15 }}
        animate={{ opacity: 1,translateX:0 }}
        transition={{duration:0.5,delay:i*0.1}}
        className="h-fit w-full mx-5 z-10 bg-black bg-opacity-25 rounded-xl backdrop-blur border-2 border-black border-opacity-5 drop-shadow-lg mt-5 text-white p-3"
      >
        <div className="flex justify-evenly ">
          <h1 className="w-full text-lg font-bold">{iterator.title}</h1>
          <div className=" w-full flex justify-center">
            <FontAwesomeIcon
              icon={faTrash}
              className="hover:scale-110 active:scale-90 active:text-amber-500 ease-in-out duration-200 cursor-pointer mx-3 "
              onClick={() => deleteTask(iterator._id)}
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="hover:scale-110 active:scale-90 active:text-amber-500 ease-in-out duration-200 cursor-pointer mx-3"
              onClick={() => updatetask(iterator)}
            />
            <FontAwesomeIcon
              icon={faContactCard}
              className="hover:scale-110 active:scale-90 active:text-amber-500 ease-in-out duration-200 cursor-pointer mx-3"
              onClick={() => updateAssignee(iterator._id)}
            />
          </div>
          <h2 className="w-full text-xs flex justify-end">
            {taskCreator?.email || "you"}
          </h2>
        </div>
        <p className=" max-h-fit bg-black bg-opacity-10 rounded p-2 mt-2 border-2 border-black/10">
          {iterator.description}
        </p>
      </motion.div>

      <div>
        <Modal
          visible={visibility}
          onClose={() => {
            setVisibility(false);
            setIsListOpen(false);
          }}
        >
          <div className="w-full">
            <label
              htmlFor="title"
              className="text-white mt-2 ml-3 font-semibold text-base"
            >
              TASK ASSIGNEES -
            </label>
            <form action="submit" method="post" className="flex w-full my-2">
              <div className="w-full flex justify-start">
                <input
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={input}
                  type="text"
                  required
                  className="w-full bg-black bg-opacity-0 text-white p-2 border-none"
                  onClick={handleList}
                />
              </div>
              <FontAwesomeIcon
                type="submit"
                icon={faArrowRight}
                onClick={() => {
                  handleClick(), setInput(""), setFilteredUsers([]);
                }}
                className="hover:scale-110 active:scale-90 drop-shadow-md transition-transform mt-3 text-white cursor-pointer mx-3"
              />
            </form>
          </div>
          <div className=" flex gap-2 justify-center text-white ">
            <div className=" max-h-80 overflow-x-hidden scrollbar-thin scrollbar-thumb-pink-500 scrollbar-thumb-rounded-md">
              {isListOpen && (
                <div className="w-full mx-2 max-w-full min-w-fit">
                  {filteredUsers.length == 0 && "No assignees found..."}
                  {filteredUsers.map((user) => (
                    <div
                      key={user.email}
                      className=" transition-transform hover:shadow-xl hover:scale-105 active:scale-95 hover:text-white cursor-pointer mx-2"
                      onClick={() => handleItemClick(user.email)}
                    >
                      {user.email}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className=" max-w-full min-w-fit max-h-80 overflow-x-hidden text-white scrollbar-thin scrollbar-thumb-pink-500 scrollbar-thumb-rounded-md">
              {assigneeData.map((assignee) => (
                <AssigneeComponent
                  users={users}
                  key={assignee.email}
                  assignee={assignee}
                  iteratorId={iterator._id}
                />
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default TaskComponent;

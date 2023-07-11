import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const LeftNavbar = ({toggleForm}) => {
  return (
    <div className=" flex flex-col gap-1 h-fit bg-black bg-opacity-20 text-white p-3 rounded-3xl ml-1 opacity-20 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out slow">
      <button className=" transition-transform hover:scale-125" onClick={toggleForm}>
        <FontAwesomeIcon icon={faPlusCircle}  />
      </button>
      <button className=" transition-transform hover:scale-125">
        <FontAwesomeIcon icon={faHourglass} />
      </button>
    </div>
  );
};

export default LeftNavbar;

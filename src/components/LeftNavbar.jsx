import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle, faSort } from "@fortawesome/free-solid-svg-icons";

const LeftNavbar = ({toggleForm}) => {
  return (
    <div className=" cursor-move flex flex-col gap-1 bg-white bg-opacity-20 text-white p-2 rounded-3xl ml-1 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out slow">
      <button className=" hover:scale-125 active:scale-90 active:text-amber-500 ease-in-out duration-200" onClick={toggleForm}>
        <FontAwesomeIcon icon={faPlusCircle}  />
      </button>
      <button className=" transition-transform hover:scale-125">
        <FontAwesomeIcon icon={faSort} />
      </button>
    </div>
  );
};

export default LeftNavbar;

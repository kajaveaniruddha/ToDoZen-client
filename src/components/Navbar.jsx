import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="flex justify-end gap-40 w-full mr-10 mt-10">
      <div className="flex -translate-x-20 gap-5">
        <Link
          to={"/https://github.com/kajaveaniruddha/ToDoZen-client"}
          className="text-white/90 my-2 hover:scale-110 shadow-md duration-200"
        >
          Client Repo
        </Link>{" "}
        <Link
          to={"https://github.com/kajaveaniruddha/ToDoZen-server"}
          className="text-white/90 my-2 hover:scale-110 shadow-md ease-in-out duration-200"
        >
          Server Repo
        </Link>
      </div>
      <Link
        to={"/https://github.com/kajaveaniruddha"}
        className="text-white/90 align-baseline mx-5 py-2 hover:scale-150 scale-125 ease-in-out duration-200  "
      >
        <FontAwesomeIcon icon={faGithub}/>
      </Link>
    </div>
  );
};

export default Navbar;

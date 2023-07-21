import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="flex flex-col w-full mt-10">
      <motion.button
        className="fixed text-white/95 align-baseline mx-5 hover:scale-110 active:scale-90 ease-in-out duration-200"
        onClick={() => setShowLinks(!showLinks)}
        whileTap={(!showLinks && { rotate: -90 }) || { rotate: 90 }}
        aria-label="GitHub repo links"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </motion.button>
      <AnimatePresence>
        {showLinks && (
          <motion.div
            className=" flex gap-5 ml-20 -my-1"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Link
              to={"https://github.com/kajaveaniruddha/ToDoZen-client"}
              className="text-white/90 my-2 hover:scale-110 hover:shadow-md duration-200"
            >
              <FontAwesomeIcon icon={faLink} />
              client
            </Link>
            <Link
              to={"https://github.com/kajaveaniruddha/ToDoZen-server"}
              className="text-white/90 my-2 hover:scale-110 hover:shadow-md ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faLink} />
              server
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed mt-20 ml-5 w-1/2">
        <motion.h1
          className=" text-[#FFC300]  text-6xl drop-shadow-lg cursor-grab active:cursor-grabbing font-Raleway font-extrabold"
          drag
          dragConstraints={{ left: 10, right: 50, top: 10, bottom: 10 }}
          dragSnapToOrigin={true}
        >
          Todozen
        </motion.h1>
        <motion.p className="text-white/80 mr-20 mt-3 font-Raleway font-medium text-lg">
          ...where productivity meets serenity. Experience seamless task
          management with our cloud-based web-app, combining efficiency and
          organization for a zen-like approach to getting things done.
          Effortlessly create, edit, and delete tasks, assign them to others,
          and collaborate with ease. Maximize your productivity and simplify
          task management with TodoZen. <br /> Let's get things done, together!
        </motion.p>
      </div>
    </div>
  );
};

export default Navbar;

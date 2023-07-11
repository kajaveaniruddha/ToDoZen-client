import React, { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import Login from "./Login";
import Navbar from "./Navbar";
import Model3d from "./Model3d";
import { motion } from "framer-motion";
const Home = () => {
  const matches = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const Model3d = lazy(() => import("./Model3d"));

  return (
    <div className="absolute h-screen w-full bg-gradient-to-r from-indigo-950 to-fuchsia-950 min-w-min ">
      <div className=" absolute h-screen w-full flex justify-evenly items-center blur-3xl opacity-50 ">
        <div className=" w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30" />
        <div className=" w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {matches && (
          <div className=" invisible min-h-full w-3/4 scale-95 z-10 flex flex-col items-center translate-x-1/2 right-1/2 absolute bg-white bg-opacity-10 rounded-3xl backdrop-blur border-2 border-white border-opacity-5 drop-shadow-lg lg:visible max-w-5xl ">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              {/* <Model3d /> */}
            </Suspense>
          </div>
        )}
        <Login />
      </motion.div>
    </div>
  );
};

export default Home;

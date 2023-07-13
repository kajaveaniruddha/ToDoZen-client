import React, { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import Login from "./Login";
import Navbar from "./Navbar";
import Model3d from "./Model3d";
import { AnimatePresence, motion } from "framer-motion";
const Home = () => {
  const matches = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const Model3d = lazy(() => import("./Model3d"));

  return (
    <div className="absolute h-screen w-full bg-gradient-to-r from-[#13112f] to-[#2e0331] min-w-min ">
      <div className=" absolute h-screen w-full flex justify-evenly items-center blur-3xl opacity-50 ">
        <div className=" w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30" />
        <div className=" w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-30" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {matches && (
          <div className=" w-3/4 h-3/4 z-10 flex flex-col items-center translate-x-1/2 right-1/2 -translate-y-1/2 top-1/2 absolute bg-white bg-opacity-10 rounded-3xl backdrop-blur border-2 border-white border-opacity-5 drop-shadow-lg max-w-5xl ">
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

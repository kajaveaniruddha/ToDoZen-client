import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { regSuccess, regFail, serverError } from "../utilities/Toasts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const host = "https://todozen-server.onrender.com";
const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      // console.log(json); -->auth-token
      if (response.status === 200) {
        regSuccess();
        navigate("/");
      } else if (response.status === 400) {
        regFail();
      }
    } catch (error) {
      serverError();
      console.log(error);
    }
  };
  return (
    <div className="absolute h-screen w-full bg-gradient-to-r from-[#13112f] to-[#2e0331] min-w-min ">
      <div className=" absolute h-screen w-full flex justify-evenly items-center blur-3xl opacity-50 ">
        <div className=" w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30" />
        <div className=" w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-30" />
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.25 }}
      >
        <form
          className="min-h-max w-1/2 z-10 absolute translate-x-1/2 right-1/2 -translate-y-1/2 top-1/2 bg-white bg-opacity-10 rounded-3xl backdrop-blur border-2 border-white border-opacity-5 drop-shadow-lg max-w-sm min-w-max"
          action="submit"
          method="POST"
          onSubmit={handleClick}
        >
          <div className="flex flex-col m-3">
            <h1 className="py-2 text-3xl drop-shadow-md bg-[#FFC300] bg-clip-text text-transparent font-Raleway font-semibold">
              Sign up
            </h1>
            <label
              htmlFor="name"
              className=" text-white mt-5 font-semibold text-base"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              onChange={handleChange}
              value={credentials.name}
              minLength={3}
              className=" border-2 border-white/10 rounded bg-white bg-opacity-10 text-white focus:border-inherit p-2"
            />
            <label
              htmlFor="email"
              className=" text-white mt-5 font-semibold text-base"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={handleChange}
              value={credentials.email}
              minLength={5}
              className=" border-2 border-white/10 rounded bg-white bg-opacity-10 text-white focus:border-inherit "
            />
            <label
              htmlFor="password"
              className=" text-white mt-5 font-semibold text-base"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={credentials.password}
              onChange={handleChange}
              minLength={6}
              className="border-2 border-white/10 rounded bg-white bg-opacity-10 text-white focus:border-inherit "
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-10 w-full py-3 rounded-md bg-gradient-to-tr from-pink-500 to-pink-600 text-lg text-white font-semibold drop-shadow-sm hover:drop-shadow-xl hover:scale-105 active:scale-95 transition-transform"
              >
                Register
              </button>
            </div>
            <p className="flex justify-center mt-10 text-md drop-shadow-sm text-white/50">
              Already registered?
              <Link
                to="/"
                className="text-pink-500 font-semibold drop-shadow-md"
              >
                &nbsp;&nbsp;&nbsp;Login
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;

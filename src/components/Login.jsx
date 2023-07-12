import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Model3d from "./Model3d";
import { loginSuccess, loginFail, serverError } from "../utilities/Toasts";
const host = "http://localhost:5500";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      // console.log(json);
      if (response.status === 200) {
        loginSuccess();
        //save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/user");
      } else {
        loginFail();
      }
    } catch (error) {
      serverError();
      console.log(error);
    }
  };
  return (
    <>
      <form
        className="min-h-max w-1/2 z-10 absolute translate-x-1/2 right-1/2 -translate-y-1/2 top-1/2 bg-white bg-opacity-10 rounded-3xl lg:w-1/3 lg:translate-x-1/3 lg:right-auto backdrop-blur border-2 border-white border-opacity-5 drop-shadow-lg max-w-sm min-w-max"
        action="submit"
        method="POST"
        onSubmit={handleClick}
      >
        <div className="flex flex-col m-3">
          <section className="py-2 font-bold text-3xl drop-shadow-md bg-gradient-to-b from-white to-amber-400 bg-clip-text text-transparent">
            WELCOME to <br />
            <h1 className=" font-extrabold">ToDoZen</h1>
          </section>
          <label
            htmlFor="email"
            className="text-white mt-5 font-semibold text-base"
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
            className="border-2 border-white/10 rounded bg-white bg-opacity-10 text-white text-base focus:border-inherit"
          />
          <label
            htmlFor="password"
            className="text-white mt-5 font-semibold text-base"
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
              continue
            </button>
          </div>
          <p className=" flex justify-center mt-10 text-md drop-shadow-sm text-white/50">
            Are you registered?
            <Link
              to="/register"
              className="text-pink-500 font-semibold drop-shadow-md"
            >
              &nbsp;&nbsp;&nbsp;Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;

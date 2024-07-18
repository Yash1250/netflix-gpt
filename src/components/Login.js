/** @format */

import React from "react";
import bgImage from "../images/bg.jpg";
import Header from "./Header";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative">
        <Header />
        <img src={bgImage} alt="bgimg" />
      </div>
      <form className="absolute flex flex-col m-5 px-10 pt-14 pb-20 bg-black bg-opacity-50 rounded-md">
        <h2 className="font-bold text-2xl text-white mb-4 mx-auto">Sign In</h2>
        <input
          className="p-2 mt-2 rounded-sm"
          type="text"
          placeholder="Enter UserName"
        />
        <input
          className="p-2 mt-2 rounded-sm"
          type="text"
          placeholder="Enter Password"
        />
        <input
          className="cursor-pointer bg-red-600 p-2 mt-7 rounded-sm text-white font-semibold"
          type="button"
          placeholder="Login"
          value="Sign In"
        />
        <p className="text-gray-400 text-md mt-2">
          New to Netflix?{" "}
          <a className="text-white font-bold cursor-pointer ">Sign Up Now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

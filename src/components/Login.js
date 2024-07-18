/** @format */

import React from "react";
import bgImage from "../images/bg.jpg";
import Header from "./Header";
import { useState, useRef, useEffect } from "react";
import validateForm from "../utils/validateForm";
const Login = () => {
  const [validateMsg, setValidateMsg] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [maxLoginAttempt, setMaxLoginAttempt] = useState(0);
  const [seconds, setSeconds] = useState(30);
  /*useEffect(() => {
    // Set up the interval to decrement the timer every second
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or the timer ends
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(0); // Ensure the timer stops at 0
    }
  }, [seconds]);*/
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  function formSubmitHandeler() {
    const msg = validateForm(
      email.current.value,
      password.current.value,
      fullName?.current?.value
    );

    //if (maxLoginAttempt >= 3 && seconds > 0) {
    //setValidateMsg(`Maximum Attempt Reached! Try after ${seconds} secs`);
    //} else setValidateMsg(msg);
    setValidateMsg(msg);
    //setMaxLoginAttempt(maxLoginAttempt + 1);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative">
        <Header />
        <img src={bgImage} alt="bgimg" />
      </div>
      <form className="absolute flex flex-col m-5 px-10 pt-14 pb-20 w-3/12 h-3/5 bg-black bg-opacity-50 rounded-md">
        <h2 className="font-bold text-2xl text-white mb-4 mx-auto">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            className="p-2 mt-2 rounded-sm bg-gray-300 text-gray-800  font-medium"
            type="text"
            placeholder="Enter Full Name"
            ref={fullName}
          />
        )}
        <input
          className="p-2 mt-4 rounded-sm bg-gray-300 text-gray-800  font-medium"
          type="text"
          placeholder="Enter Email"
          ref={email}
        />
        <input
          className="p-2 mt-4 rounded-sm bg-gray-300 text-gray-800  font-medium"
          type="password"
          placeholder="Enter Password"
          ref={password}
        />
        <input
          className="cursor-pointer bg-red-600 p-2 mt-7 rounded-sm text-white font-semibold"
          type="button"
          placeholder="Login"
          value={isSignInForm ? "Sign In" : "Sign Up"}
          onClick={formSubmitHandeler}
        />
        <p className="text-red-600 font-semibold text-base">{validateMsg}</p>
        <p className="text-gray-400 text-md mt-2">
          {isSignInForm ? "New to Netflix? " : "Already Have an Account? "}
          <a
            onClick={() => setIsSignInForm(!isSignInForm)}
            className="text-white font-bold cursor-pointer ">
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

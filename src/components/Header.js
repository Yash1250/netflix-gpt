/** @format */

import React from "react";
import netflixLogo from "../images/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import myStore from "../utils/myStore";

const Header = () => {
  const Navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.user);
  console.log(loggedInUser);
  function signOutHandeler() {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {
        Navigate("/error");
      });
  }
  return (
    <div className="flex flex-row justify-between items-center p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] absolute">
      <div className="">
        <img className="w-[12%]" src={netflixLogo} alt="Logo" />
      </div>
      {loggedInUser && (
        <>
          <div>
            <h2>{loggedInUser?.fullName}</h2>
          </div>
          <div className="flex gap-2 w-44 h-12">
            <img
              className="w-12 h-12"
              src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
              alt="userIcon"
            />
            <button onClick={signOutHandeler} className="font-bold">
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;

/** @format */

import React, { useEffect } from "react";
import netflixLogo from "../images/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { SiProbot } from "react-icons/si";
import { RiRobot2Fill } from "react-icons/ri";
import { toggleGptSearch } from "../utils/isGptSearchPageSlice";

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.user);
  //console.log(loggedInUser);
  useEffect(() => {
    const clearAuthChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            emial: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/browse");
      } else {
        Navigate("/");
        dispatch(removeUser());
      }
    });
    //unmouting
    return () => clearAuthChanged();
  }, []);
  function signOutHandeler() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/error");
      });
  }

  const toggleGptHandeler = (e) => {
    if (e.currentTarget.id == "home") {
      dispatch(toggleGptSearch(false));
    } else {
      dispatch(toggleGptSearch(true));
    }
  };
  return (
    <div className="flex flex-row justify-between text-white items-center p-4 absolute z-30 bg-gradient-to-bl from-black to-transparent">
      <div className="">
        <img
          className="w-[12%] cursor-pointer"
          src={netflixLogo}
          alt="Logo"
          onClick={toggleGptHandeler}
          id="home"
        />
      </div>
      {loggedInUser && (
        <>
          <div className="flex items-center gap-4 w-[30%] h-14">
            <div
              className="tooltip cursor-pointer"
              onClick={toggleGptHandeler}
              id="gptSearch">
              <RiRobot2Fill className="w-12 h-12 cursor-pointer mx-auto text-red-600 bg-white rounded-full p-1" />
              <span className="tooltiptext">GPT Space</span>
            </div>
            {/* <h2 className="w-42">{loggedInUser?.displayName}</h2> */}
            <div className="tooltip">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12"
                  src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                  alt="userIcon"
                />
                <button onClick={signOutHandeler} className="font-bold">
                  Sign Out
                </button>
              </div>
              <span className="tooltiptext">{loggedInUser?.displayName}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;

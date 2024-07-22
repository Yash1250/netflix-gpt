/** @format */

import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const MainTitle = ({ title, description }) => {
  return (
    <div>
      <div className="pt-32 px-8 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-5xl font-bold py-8">{title}</h1>
        <p className="text-xl w-2/6">{description}</p>
        <div className="flex gap-4 mt-4">
          <button className="px-12 py-2 text-lg rounded-lg flex gap-2 content-center items-center bg-gray-600 bg-opacity-60 text-white">
            <FaPlay />
            Play
          </button>
          <button className="px-7 py-2 text-lg rounded-lg flex gap-1 content-center items-center bg-gray-600 bg-opacity-60 text-white">
            <MdOutlineInfo />
            More Info{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;

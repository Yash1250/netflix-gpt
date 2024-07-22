/** @format */

import React from "react";
import useMainMovie from "../hooks/useMainMovie";

const MainVideo = ({ movieId }) => {
  const trailer = useMainMovie(movieId);
  console.log(trailer);
  return (
    <div className="">
      <iframe
        className=" w-screen aspect-video"
        src={trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  );
};

export default MainVideo;

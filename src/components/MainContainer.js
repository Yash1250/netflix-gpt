/** @format */

import React from "react";
import { useSelector } from "react-redux";
import MainTitle from "./MainTitle";
import MainVideo from "./MainVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovie);
  if (!movies) return;
  const randIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randIndex];
  console.log(mainMovie);
  return (
    <div className="relative">
      <MainTitle
        title={mainMovie?.original_title}
        description={mainMovie?.overview}
      />
      <MainVideo movieId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;

/** @format */

import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMoives from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMoives();
  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

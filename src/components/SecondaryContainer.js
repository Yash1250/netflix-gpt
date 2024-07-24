/** @format */

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movie.popularMovie);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovie);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovie);
  console.log(nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-72 relative">
        <MovieList category={"Now Playing Movies"} movies={nowPlayingMovies} />
        <MovieList category={"Popular Movies"} movies={popularMovies} />
        <MovieList category={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList category={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

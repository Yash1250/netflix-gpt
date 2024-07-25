/** @format */

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SearchContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movie.popularMovie);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovie);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovie);
  return (
    <div className="flex w-screen flex-col items-center justify-center absolute top-32">
      <div className="flex w-2/6 justify-between rounded-full bg-red-600 text-white">
        <input
          className="px-4 text-lg py-3 flex-grow rounded-l-full"
          type="text"
          placeholder="What Do you want to Watch?"
        />
        <button className="px-4 py-3 text-lg rounded-r-full">Search</button>
      </div>
      <div className="w-screen ">
        <MovieList category={"Now Playing Movies"} movies={nowPlayingMovies} />
        <MovieList category={"Now Playing Movies"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SearchContainer;

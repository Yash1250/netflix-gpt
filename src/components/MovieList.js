/** @format */

import React from "react";
import MoiveCard from "./MoiveCard";

const MovieList = ({ category, movies }) => {
  //console.log(movies);
  return (
    <div className="">
      <div className=" p-3 ">
        <h1 className="font-semibold text-3xl mb-3 text-white ">{category}</h1>
        <div className="flex overflow-x-scroll gap-3 no-scrollbar">
          {movies?.map((movie) => {
            return <MoiveCard path={movie?.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

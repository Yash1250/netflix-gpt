/** @format */

import { useEffect } from "react";
import { options, topRatedApi } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchTopRatedMovie = async () => {
    const response = await fetch(topRatedApi, options);
    const json = await response.json();
    dispatch(addTopRatedMovie(json.results));

    //console.log(json.results);
  };

  useEffect(() => {
    fetchTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;

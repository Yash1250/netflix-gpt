/** @format */

import { useEffect } from "react";
import { options, popularApi } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovie = async () => {
    const response = await fetch(popularApi, options);
    const json = await response.json();
    dispatch(addPopularMovie(json.results));

    //console.log(json.results);
  };

  useEffect(() => {
    fetchPopularMovie();
  }, []);
};

export default usePopularMovies;

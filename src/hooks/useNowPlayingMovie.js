/** @format */

import { useEffect } from "react";
import { options, nowPlayingApi } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieList } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingMovie = async () => {
    const response = await fetch(nowPlayingApi, options);
    const json = await response.json();
    dispatch(addMovieList(json.results));

    console.log(json.results);
  };

  useEffect(() => {
    fetchNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovie;

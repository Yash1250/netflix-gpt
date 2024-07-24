/** @format */

import { useEffect } from "react";
import { options, upcomingApi } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";

const useUpcomingMoives = () => {
  const dispatch = useDispatch();
  const fetchUpcomingMovie = async () => {
    const response = await fetch(upcomingApi, options);
    const json = await response.json();
    dispatch(addUpcomingMovie(json.results));

    //console.log(json.results);
  };

  useEffect(() => {
    fetchUpcomingMovie();
  }, []);
};

export default useUpcomingMoives;

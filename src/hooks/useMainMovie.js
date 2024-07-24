/** @format */

import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useMainMovie = (movieId) => {
  const [trailer, setTrailer] = useState("");

  const fetchMainMovieVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      options
    );
    const json = await response.json();
    const trailers = json.results.filter((elem) => elem?.type === "Trailer");

    if (trailers.length > 0) {
      setTrailer(
        `https://www.youtube.com/embed/${trailers[0].key}?si=PWRt5E1A-nywPyYt&autoplay=1&mute=1`
        //`https://www.youtube.com/embed/${trailers[0].key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0`
      );
    }
  };

  useEffect(() => {
    fetchMainMovieVideo();
  }, [movieId]);

  return trailer;
};

export default useMainMovie;

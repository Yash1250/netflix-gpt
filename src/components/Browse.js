/** @format */

import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovie();
};

export default Browse;

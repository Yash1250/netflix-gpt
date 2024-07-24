/** @format */

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieSlice.actions;
export default movieSlice.reducer;

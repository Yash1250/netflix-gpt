/** @format */

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { nowPlayingMovie: null },
  reducers: {
    addMovieList: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { addMovieList } = movieSlice.actions;
export default movieSlice.reducer;

/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import isGptSearchPageSlice from "./isGptSearchPageSlice";

const myStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice,
    isGptSearchPage: isGptSearchPageSlice,
  },
});

export default myStore;

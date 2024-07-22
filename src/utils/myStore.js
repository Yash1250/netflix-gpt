/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";

const myStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice,
  },
});

export default myStore;

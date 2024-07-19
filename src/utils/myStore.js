/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const myStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default myStore;

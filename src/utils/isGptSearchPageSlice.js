/** @format */

import { createSlice } from "@reduxjs/toolkit";

const isGptSearchPageSlice = createSlice({
  name: "gptSearch",
  initialState: {
    isGptSearch: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.isGptSearch = action.payload;
    },
  },
});

export const { toggleGptSearch } = isGptSearchPageSlice.actions;
export default isGptSearchPageSlice.reducer;

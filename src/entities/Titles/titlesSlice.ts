import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titles: [],
};

const titlesSlice = createSlice({
  name: "titlesSlice",
  initialState,
  reducers: {
    setTitlesData: (state, action) => {
      state.titles = action.payload.titles;
    },
  },
});

export const { reducer: titlesReducer, actions: titlesActions } = titlesSlice;

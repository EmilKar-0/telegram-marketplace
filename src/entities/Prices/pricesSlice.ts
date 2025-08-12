import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prices: [],
};

const pricesSlice = createSlice({
  name: "pricesSlice",
  initialState,
  reducers: {
    setPricesData: (state, action) => {
      state.prices = action.payload.prices;
    },
  },
});

export const { reducer: pricesReducer, actions: pricesActions } = pricesSlice;

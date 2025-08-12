import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  content: "",
  data: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.content = action.payload.content;
      state.data = action.payload.data;
      state.isOpen = true;
    },
    setClose: (state) => {
      state.isOpen = false;
      state.content = "";
    },
  },
});

export const { actions: modalActions } = modalSlice;
export const { reducer: modalReducer } = modalSlice;

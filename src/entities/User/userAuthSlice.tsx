import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RequestDataType } from "@/shared/types";
import type { TelegramAuthData } from "@telegram-auth/react";

const initialState: RequestDataType = {
  data: {
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
    photo_url: "",
    auth_date: 0,
    hash: "",
  },
  isDataSend: false,
};

const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
    setRequestData: (state, action: PayloadAction<TelegramAuthData>) => {
      state.data = action.payload;
    },
    setIsDataSend: (state, action) => {
      state.isDataSend = action.payload;
    },
    clearRequestData: (state) => {
      state.data = null;
      state.isDataSend = false;
    },
  },
});

export const { reducer: userAuthReducer, actions: userAuthActions } =
  userAuthSlice;

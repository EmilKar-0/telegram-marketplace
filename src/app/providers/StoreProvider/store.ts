import { configureStore } from "@reduxjs/toolkit";
import { userReducer, userAuthReducer } from "@/entities/User";
import { modalReducer } from "@/entities/Modal";
import { pricesReducer } from "@/entities/Prices/pricesSlice.ts";
// import { userApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    // [userApi.reducerPath]: userApi.reducer,
    userAuth: userAuthReducer,
    userSlice: userReducer,
    modal: modalReducer,
    prices: pricesReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(userApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

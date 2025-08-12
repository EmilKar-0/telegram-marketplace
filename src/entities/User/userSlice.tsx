import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUserState } from "@/shared/types";

const initialState: IUserState = {
  isAuthorized: false,
  accessToken: null,
  profile: {
    telegramId: null,
    firstName: "",
    photoUrl: null,
    username: null,
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<Omit<IUserState, "accessToken">>,
    ) => {
      state.profile = action.payload.profile;
      state.isAuthorized = action.payload.isAuthorized;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },

    logout: (state) => {
      state.accessToken = null;
      state.profile = null;
      state.isAuthorized = false;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;

// export const login =
//   (credentials: IRequestBody) => async (dispatch: AppDispatch) => {
//     try {
//       const data = await authService.login(credentials);
//       dispatch(setToken(data.accessToken));
//       dispatch(setUserData({ isAuthorized: true, profile: data.profile }));
//     } catch (error) {
//       throw new Error("Login failed. Please try again.");
//     }
//   };
// export const test = () => async () => {
//   await authService.test();
// };

// export const checkAuth = () => async (dispatch: AppDispatch) => {
//   try {
//     const data = await authService.checkAuth();
//     if (data.accessToken && data.isAuthorized && data.profile) {
//       dispatch(setToken(data.accessToken));
//       dispatch(setUserData({ isAuthorized: true, profile: data.profile }));
//     }
//   } catch {
//     dispatch(logout());
//   }
// };

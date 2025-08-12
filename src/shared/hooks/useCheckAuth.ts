// hooks/useCheckAuth.ts
import { useEffect } from "react";
import api from "../services/api/axiosApi.ts";
import { setToken, logout } from "../store/userSlice.tsx";
import { useAppDispatch } from "./";

const useCheckAuth = () => {
  const dispatch = useAppDispatch();

  return useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get("/auth/check");
        dispatch(setToken(data.accessToken));
      } catch (error) {
        dispatch(logout());
      }
    };

    checkAuth();
  }, [dispatch]);
};

export default useCheckAuth;

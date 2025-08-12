// services/authService.ts
import { api } from "@/shared/api";
import type { RequestDataType } from "@/shared/types";

export const authService = {
  async login(credentials: RequestDataType) {
    const { isDataSend, ...data } = credentials;
    console.log(data);
    const response = await api.post("/auth/login", data);
    return response.data; // { accessToken, user }
  },

  async test() {
    await api.get("/auth/test");
  },

  async logout() {
    await api.post("/auth/logout");
  },

  async refresh() {
    const response = await api.post("/auth/refresh");
    return response.data; // { accessToken }
  },

  // async checkAuth() {
  //   const response = await api.get("/auth/check");
  //   return response.data; // { accessToken?, user? }
  // },
};

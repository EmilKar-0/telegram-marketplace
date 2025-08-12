// api/interceptors.ts
import { api } from "./axiosApi.ts";
import { refreshApi } from "./refreshApi.ts";
import { store } from "@/app/providers";
import { userActions } from "@/entities/User";

let isRefreshing = false;
let failedRequestsQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

export const setupInterceptors = () => {
  // Добавляем токен к каждому запросу
  api.interceptors.request.use((config) => {
    const { accessToken } = store.getState().userSlice;

    if (accessToken && !config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  });

  // Обрабатываем 401 ошибки
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({ resolve, reject });
          })
            .then(() => api(originalRequest))
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const { data } = await refreshApi.post("/auth/refresh");
          const newAccessToken = data.accessToken;

          store.dispatch(userActions.setToken(newAccessToken));
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // Повторяем оригинальный запрос
          const response = await api(originalRequest);

          // Выполняем запросы из очереди
          failedRequestsQueue.forEach(({ resolve }) => resolve(newAccessToken));

          return response;
        } catch (refreshError) {
          failedRequestsQueue.forEach(({ reject }) => reject(refreshError));
          store.dispatch(userActions.logout());
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
          failedRequestsQueue = [];
        }
      }

      return Promise.reject(error);
    },
  );
};

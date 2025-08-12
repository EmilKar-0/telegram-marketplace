import axios from "axios";

export const refreshApi = axios.create({
  baseURL: "https://sorrowfully-patient-human.cloudpub.ru",
  withCredentials: true, // Для передачи httpOnly cookies
});

refreshApi.interceptors.request.use((config) => {
  config.headers.Authorization = undefined;
  return config;
});

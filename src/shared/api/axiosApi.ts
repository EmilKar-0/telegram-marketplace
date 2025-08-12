import axios from "axios";
export const api = axios.create({
  baseURL: "https://sorrowfully-patient-human.cloudpub.ru",
  withCredentials: true,
});

import { getLocalStorageItem } from "@utils/localStorage";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const authToken = getLocalStorageItem("accessToken");
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    } else {
      delete config.headers["Authorization"]; // Remove the header if no token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;

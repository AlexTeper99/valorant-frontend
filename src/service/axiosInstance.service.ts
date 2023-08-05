import axios from "axios";

const basicContentType = { "Content-Type": "application/json" };

const axiosInstance = axios.create({
  baseURL: "https://valorantapi-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
    get: basicContentType,
    post: basicContentType,
    put: basicContentType,
    delete: basicContentType,
    patch: basicContentType,
  },
});

export default axiosInstance;

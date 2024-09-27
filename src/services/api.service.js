import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Cho phép gửi cookie
};

const api = axios.create({
  baseURL: "https://gym-management-fk1o.onrender.com/",
  ...commonConfig,
});

export default api;

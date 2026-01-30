import axios from "axios";

const api = axios.create({
  baseURL: `https://mern-car-marketplace-two.vercel.app/`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});

export default api;

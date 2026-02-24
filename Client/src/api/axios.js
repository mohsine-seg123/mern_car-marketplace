import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
<<<<<<< HEAD
   withCredentials: true,
=======
  withCredentials: true,
>>>>>>> 6f3f9fe (after add dashbord)
  timeout: 10000,
});

export default api;

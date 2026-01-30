import  axios from "./../api/axios";

export const getCarts = () => axios.get("/cars");

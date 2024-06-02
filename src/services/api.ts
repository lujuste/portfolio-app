import axios from "axios";
//deploy
const api = axios.create({
  baseURL: "https://apirest.portfolioimoveis.com.br",
  // baseURL: process.env.REACT_APP_CURRENT_API_DEV,
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://vanbora-back-end.azurewebsites.net/",
});

export default api;

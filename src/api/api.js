import axios from "axios";

const api = axios.create({
  baseURL: "https://vanbora-back-end.azurewebsites.net/",
});

//http://localhost:8080

export default api;

import api from "../api";

export const loadDriverById = (id, setDriver) => {
  api
    .get(`driver/${id}`)
    .then((response) => {
      setDriver(response.data);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

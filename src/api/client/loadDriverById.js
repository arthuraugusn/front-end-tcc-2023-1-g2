import api from "../api";

export const loadDriverById = (id, setDriverById) => {
  api
    .get(`driver/${id}`)
    .then((response) => {
      setDriverById(response.data.user);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

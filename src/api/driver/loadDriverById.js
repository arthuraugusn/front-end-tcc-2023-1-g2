import api from "../api";

export const loadDriverById = async (id, setDriverById) => {
  await api
    .get(`driver/${id}`)
    .then((response) => {
      setDriverById(response.data);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

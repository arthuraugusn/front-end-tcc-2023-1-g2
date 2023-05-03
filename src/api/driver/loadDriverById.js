import api from "../api";

export const loadDriverById = async (id, setDriver) => {
  await api
    .get(`driver/${id}`)
    .then((response) => {
      if (response.status == 200) {
        setDriver(response.data);
      }
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

import api from "../api";

export const loadDriverByCpf = (cpf, setIdDriver) => {
  api
    .get(`driver/id/${cpf}`)
    .then((response) => {
      setIdDriver(response.data.id);
    })
    .catch((err) => {
      console.log(err);
    });
};

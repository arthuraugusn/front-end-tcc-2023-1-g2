import api from "../api";

export const carregarMotoristas = (setDrivers) => {
  api
    .get("/drivers")
    .then((response) => {
      setDrivers(response.data);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

import api from "../api";

export const carregarMotoristas = (setDrivers) => {
  api
    .get("/drivers")
    .then((response) => {
      setDrivers(response.data.drivers);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

import api from "../api";

export const loadPrices = (setPrices) => {
  api
    .get("/prices")
    .then((response) => {
      setPrices(response.data.prices);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

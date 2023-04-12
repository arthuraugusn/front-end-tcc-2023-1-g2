import api from "../api";

export const loadTypeofPay = (setTypeofPay) => {
  api
    .get("typePayments")
    .then((response) => {
      setTypeofPay(response.data.typesPayment);
    })
    .catch((err) => {
      console.log("Erro" + err);
    });
};

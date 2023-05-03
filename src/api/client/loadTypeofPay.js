import api from "../api";

export const loadTypeofPay = (setTypeofPay, setResponseError) => {
  api
    .get("typePayments")
    .then((response) => {
      setTypeofPay(response.data.typesPayment);
      setResponseError(response.status);
    })
    .catch((err) => {
      console.log("Erro" + err);
    });
};

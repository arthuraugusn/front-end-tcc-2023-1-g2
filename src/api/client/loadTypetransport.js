import api from "../api";

export const loadTypetransport = (setTypesTransport) => {
  api
    .get("typeContracts")
    .then((response) => {
      setTypesTransport(response.data.typesPayment);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

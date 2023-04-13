import api from "../api";

export const loadTypetransport = (setTypesContracts) => {
  api
    .get("typeContracts")
    .then((response) => {
      setTypesContracts(response.data.typesContracts);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

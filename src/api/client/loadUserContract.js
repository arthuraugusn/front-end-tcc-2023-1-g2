import api from "../api";

export const loadUserContract = (id, setAllUserContracts) => {
  api
    .get(`contracts/${id}`)
    .then((response) => setAllUserContracts(response.data.contracts))
    .catch((err) => {
      console.log("Erro" + err);
    });
};

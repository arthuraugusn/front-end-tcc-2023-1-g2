import api from "../api";

export const loadUserContract = (id, setAllUserContracts) => {
  api
    .get(`contracts/${1}`)
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.log("Erro" + err);
    });
};

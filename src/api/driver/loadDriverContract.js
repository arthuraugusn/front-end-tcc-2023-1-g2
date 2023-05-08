import api from "../api";

export const loadDriverContract = (id, setAllDriverContracts) => {
  api
    .get(`contracts/driver/${id}`)
    .then((response) => {
      setAllDriverContracts(response.data.contracts);
    })
    .catch((err) => {
      console.log("Erro" + err);
    });
};

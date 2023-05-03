import api from "../api";

export const loadContracts = (setAllContracts) => {
  api.get("contracts").then((response) => {
    console.log(response.data);
    setAllContracts(response.data.contracts);
  });
};

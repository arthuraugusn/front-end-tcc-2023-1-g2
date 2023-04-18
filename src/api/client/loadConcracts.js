import api from "../api";

export const loadContracts = (setAllContracts) => {
  api.get("contracts").then((response) => {
    setAllContracts(response.data.contracts)
  });
};

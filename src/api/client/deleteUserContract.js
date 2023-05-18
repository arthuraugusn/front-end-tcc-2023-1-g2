import api from "../api";

export const deleteContractUser = (id, setStatusCode) => {
  api.delete(`contract/${id}`).then((response) => {
    setStatusCode(response);
  });
};

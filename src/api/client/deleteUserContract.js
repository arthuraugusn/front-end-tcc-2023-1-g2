import api from "../api";

export const deleteContractUser = (id, setStatusCode) => {
  api.delete(`delete/${id}`).then((response) => {
    setStatusCode(response.status);
  });
};

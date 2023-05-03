import api from "../api";

export const deleteDriver = (id, setStatusCode) => {
  api.delete(`driver/${id}`).then((response) => {
    setStatusCode(response.status);
  });
};

import api from "../api";

export const deleteUser = (id, setStatusCode) => {
  api.delete(`user/${id}`).then((response) => {
    setStatusCode(response.status);
  });
};

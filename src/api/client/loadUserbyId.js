import api from "../api";

export const loadUserbyId = (id, setloadUserbyId) => {
  api
    .get(`user/${id}`)
    .then((response) => {
      console.log(response.status);
      setloadUserbyId(response.data);
    })
    .catch((err) => {
      console.log("Erro" + err);
    });
};

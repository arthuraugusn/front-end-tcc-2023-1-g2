import api from "../api";

export const loadUserbyId = (id, setloadUserbyId) => {
  api
    .get(`user/${id}`)
    .then((response) => {
      setloadUserbyId(response.data.users);
    })
    .catch((err) => {
      console.log("Erro" + err);
    });
};

import api from "../api";

export const loadDriverByLogin = (setDriver, email, password) => {
  api
    .post("user/login", {
      email: email,
      senha: password,
    })
    .then((response) => {
      setDriver(response.data);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

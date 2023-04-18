import api from "../api";

export const loginCliente = (setClient, cliente) => {
  api
    .post("user/login", {
      email: cliente.email,
      senha: cliente.uid,
    })
    .then((response) => {
      setClient(response);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

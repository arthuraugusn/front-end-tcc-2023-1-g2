import api from "../api";

export const loginCliente = (setClient, cliente) => {
  api
    .post("user/login", {
      email: cliente.email,
      senha: cliente.uid,
    })
    .then((response) => {
      setClient({
        data: response.data,
        code: response.status,
        status_user_driver: 2,
      });
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};

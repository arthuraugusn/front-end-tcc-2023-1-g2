import api from "../api";

export const loginCliente = (setClient, cliente) => {
  api
    .post("user/login", {
      email: cliente.email,
      senha: cliente.uid,
    })
    .then((response) => {
      if (response.status != 200) {
        setClient({
          code: 404,
        });
      } else if (response.status == 200) {
        setClient({
          data: response.data,
          code: response.status,
          status_user_driver: 2,
        });
      }
    })
    .catch((err) => {
      setClient({
        code: 404,
      });
    });
};

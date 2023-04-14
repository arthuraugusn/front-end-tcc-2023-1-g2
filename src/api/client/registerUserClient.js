import api from "../api";

export const registerUserClient = (user, setResponseError) => {
  api
    .post("user", {
      email: `${user.email}`,
      nome: `${user.nome}`,
      rg: `${user.rg}`,
      cpf: `${user.cpf}`,
      telefone: `${user.telefone}`,
      data_nascimento: `${user.data_nascimento}`,
      senha: `${user.senha}`,
      foto: `${user.foto}`,
      cep: `${user.cep}`,
      status_usuario: user.status_usuario,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};
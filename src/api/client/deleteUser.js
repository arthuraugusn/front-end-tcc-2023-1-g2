import api from "../api";

export const deleteUser = (user, setStatusCode) => {
  api
    .put(`user/${user.id}`, {
      email: `${user.email}`,
      nome: `${user.nome}`,
      rg: `${user.rg}`,
      cpf: `${user.cpf}`,
      telefone: `${user.telefone}`,
      data_nascimento: `${user.data_nascimento}`,
      senha: `${user.senha}`,
      foto: `${user.img}`,
      cep: `${user.cep}`,
      status_usuario: 0,
    })
    .then((response) => {
      setStatusCode(response.status);
    });
};

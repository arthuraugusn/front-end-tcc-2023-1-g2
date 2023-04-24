import api from "../api";

export const updateUser = (user, id, setStatusCode) => {
  api
    .put(`user/${id}`, {
      email: `${user.email}`,
      nome: `${user.nome}`,
      rg: `${user.rg}`,
      cpf: `${user.cpf}`,
      telefone: `${user.telefone}`,
      data_nascimento: `${user.data_nascimento}`,
      senha: `${user.nova_senha}`,
      foto: `${user.foto}`,
      cep: `${user.cep}`,
      status_usuario: 1,
    })
    .then((response) => {
      setStatusCode(response.status);
    });
};

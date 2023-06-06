import api from "../api";

export const updateUser = (user, id, setStatusCode) => {
  var diaN = user.data_nascimento.split("/")[0];
  var mesN = user.data_nascimento.split("/")[1];
  var anoN = user.data_nascimento.split("/")[2];
  api
    .put(`user/${id}`, {
      email: `${user.email}`,
      nome: `${user.nome}`,
      rg: `${user.rg}`,
      cpf: `${user.cpf}`,
      telefone: `${user.telefone}`,
      data_nascimento: `${anoN}-${mesN.slice(-2)}-${diaN.slice(-2)}`,
      senha: `${user.nova_senha}`,
      foto: `${user.foto}`,
      cep: `${user.cep}`,
      status_usuario: 1,
    })
    .then((response) => {
      setStatusCode(response.status);
    });
};

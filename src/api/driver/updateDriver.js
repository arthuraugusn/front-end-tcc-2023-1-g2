import api from "../api";

export const updateDriver = (driver, id, setStatusCode) => {
  api
    .put(`driver/${id}`, {
      email: `${driver.email}`,
      nome: `${driver.nome}`,
      rg: `${driver.rg}`,
      cpf: `${driver.cpf}`,
      telefone: `${driver.telefone}`,
      data_nascimento: `${driver.data_nascimento}`,
      inicio_carreira: `${driver.inicio_carreira}`,
      senha: `${driver.nova_senha}`,
      foto: `${driver.foto}`,
      cnh: `${driver.cnh}`,
      avaliacao: driver.avaliacao,
      descricao: `${driver.descricao}`,
      status_motorista: 1,
      id_preco: parseInt(driver.id_preco),
    })
    .then((response) => {
      console.log(response);
      setStatusCode(response.status);
    });
};

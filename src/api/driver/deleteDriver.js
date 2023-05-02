import api from "../api";

export const deleteDriver = (driver, setResponseError) => {
  console.log(driver);
  api
    .put("driver", {
      nome: `${driver.nome}`,
      email: `${driver.email}`,
      rg: `${driver.rg}`,
      cpf: `${driver.cpf}`,
      cnh: `${driver.cnh}`,
      telefone: `${driver.telefone}`,
      data_nascimento: `${driver.data_nascimento}`,
      inicio_carreira: `${driver.inicio_carreira}`,
      senha: `${driver.senha}`,
      foto: `${driver.img}`,
      avaliacao: driver.avaliacao,
      descricao: `${driver.descricao}`,
      status_motorista: 0,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};

import api from "../api";

export const updateDriver = (driver, id, setStatusCode) => {
  var diaN = driver.data_nascimento.split("/")[0];
  var mesN = driver.data_nascimento.split("/")[1];
  var anoN = driver.data_nascimento.split("/")[2];
  var diaC = driver.inicio_carreira.split("/")[0];
  var mesC = driver.inicio_carreira.split("/")[1];
  var anoC = driver.inicio_carreira.split("/")[2];
  api
    .put(`driver/${id}`, {
      email: `${driver.email}`,
      nome: `${driver.nome}`,
      rg: `${driver.rg}`,
      cpf: `${driver.cpf}`,
      telefone: `${driver.telefone}`,
      data_nascimento: `${anoN}-${mesN.slice(-2)}-${diaN.slice(-2)}`,
      inicio_carreira: `${anoC}-${mesC.slice(-2)}-${diaC.slice(-2)}`,
      senha: `${driver.nova_senha}`,
      foto: `${driver.foto}`,
      cnh: `${driver.cnh}`,
      avaliacao: driver.avaliacao,
      descricao: `${driver.descricao}`,
      status_motorista: 1,
      id_preco: parseInt(driver.id_preco.id),
    })
    .then((response) => {
      console.log(response);
      setStatusCode(response.status);
    });
};

import api from "../api";

export const updateContract = (idContrato, contrato, setResponseError) => {
  api
    .put(`contract/${idContrato}`, {
      nome_passageiro: `${contrato.nome_passageiro}`,
      idade_passageiro: parseInt(contrato.idade_passageiro),
      id_usuario: contrato.usuario.id,
      id_motorista: contrato.motorista.id,
      id_escola: contrato.escola.id,
      id_tipo_pagamento: contrato.tipo_pagamento.id,
      id_tipo_contrato: contrato.tipo_contrato.id,
      status_contrato: 1,
    })
    .then((response) => {
      setResponseError({ code: response.status, result: response.data });
    });
};

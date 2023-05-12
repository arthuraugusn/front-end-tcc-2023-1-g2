import api from "../api";

export const updateContract = (contrato, setResponseError) => {
  api
    .post("contract", {
      nome_passageiro: `${contrato.nome_passageiro}`,
      idade_passageiro: parseInt(contrato.idade_passageiro),
      id_usuario: contrato.id_usuario,
      id_motorista: contrato.id_motorista,
      id_escola: contrato.id_escola,
      id_tipo_pagamento: contrato.id_tipo_pagamento,
      id_tipo_contrato: contrato.id_tipo_contrato,
    })
    .then((response) => {
      setResponseError({ code: response.status, result: response.data });
    });
};

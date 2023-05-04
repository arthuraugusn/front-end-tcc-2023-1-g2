import api from "../api";

export const registerContract = (contrato, setResponseError) => {
  api.post("contract", {
    valor: 100.0,
    nome_passageiro: `${contrato.nome_passageiro}`,
    idade_passageiro: `${contrato.idade_passageiro}`,
    id_usuario: contrato.id_usuario,
    id_motorista: contrato.id_motorista,
    id_escola: contrato.id_escola,
    id_tipo_pagamento: contrato.id_tipo_pagamento,
    id_tipo_contrato: contrato.id_tipo_contrato,
  });
};
// import { loadTypeofPay} from '../client/loadTypeofPay';

// export const registerContract = (contract, ids, setResponseError) => {
//   api
//     .post("contract", {
//       valor: `${contract.valor}`,
//       nome_passageiro: `${contract.nome_passageiro}`,
//       idade_passageiro: `contract.idade_passageiro`,
//       id_usuario: `${contract.id_usuario}`,
//       id_motorista: 32,
//       id_escola: 4,
//       id_tipo_pagamento: 2,
//       id_tipo_contrato: 3,
//       status_contrato: 1,
//     })
//     .then((response) => {
//       setResponseError(response);
//     })
//     .catch((err) => {
//       setResponseError(err);
//     });
// };

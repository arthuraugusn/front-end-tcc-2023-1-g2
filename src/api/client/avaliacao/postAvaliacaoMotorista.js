import api from "../../api";

export const postAvaliacao = (
  idUsuario,
  idMotorista,
  idAvaliacao,
  setResponseError
) => {
  api
    .post("usuarioAvaliacaoMotorista", {
      id_usuario: idUsuario,
      id_motorista: idMotorista,
      id_avaliacao: idAvaliacao,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};

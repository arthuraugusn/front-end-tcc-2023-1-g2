import api from "../../api";

export const loadEnderecoUsuarioById = (idUsuario, setResponseError) => {
  api
    .get(`enderecoUsuario/${idUsuario}`)
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};

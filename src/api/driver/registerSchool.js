import api from "../api";

export const registerSchool = (nomeEscola, setResponseError) => {
  api
    .post("school", {
      nome: nomeEscola,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err.response);
    });
};

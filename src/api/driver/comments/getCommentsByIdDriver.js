import api from "../../api";

export const getCommentsByIdDriver = (
  idDriver,
  setComments,
  setResponseError
) => {
  api
    .get(`comments/driver/${idDriver}`)
    .then((response) => {
      setComments(response.data.comentarios);
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};

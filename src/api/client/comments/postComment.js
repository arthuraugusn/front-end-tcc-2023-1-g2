import api from "../../api";

export const postComment = (comment, setResponseError) => {
  api
    .post("comment", {
      comentario: comment.comentario,
      id_usuario: comment.id_usuario,
      id_motorista: comment.id_motorista,
    })
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};

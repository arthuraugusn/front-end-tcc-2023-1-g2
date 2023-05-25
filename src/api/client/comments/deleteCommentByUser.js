import api from "../../api";

export const deleteCommentByUser = (idComment, setResponseError) => {
  api
    .delete(`comment/${idComment}`)
    .then((response) => {
      setResponseError(response);
    })
    .catch((err) => {
      setResponseError(err);
    });
};

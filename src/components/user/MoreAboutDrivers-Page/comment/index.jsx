import { useEffect, useState } from "react";
import { getCommentsByIdDriver } from "../../../../api/driver/comments/getCommentsByIdDriver";
import "./style.css";
import { deleteCommentByUser } from "../../../../api/client/comments/deleteCommentByUser";

export const Comment = ({ props }) => {
  const [comments, setComments] = useState([
    {
      id: 0,
      comentario: "",
      user: {
        id: 0,
        foto: "",
        nome: "",
      },
    },
  ]);
  const [responseError, setResponseError] = useState({});

  const [responseErrorDelete, setResponseErrorDelete] = useState({});

  useEffect(() => {
    getCommentsByIdDriver(props.idDriver, setComments, setResponseError);
  });

  useEffect(() => {
    console.log(responseErrorDelete);
  }, [responseError, comments, responseErrorDelete]);

  return (
    <div className="container-all-comments">
      {comments.map((comment) => {
        if (comment.user.id.toString() === localStorage.getItem("id")) {
          return (
            <div className="container-comment">
              <div className="comment-img-container">
                <img src={comment.user.foto} alt="" />
              </div>
              <div className="container-comment-text">
                <div className="container-nome-user">
                  <p>{comment.user.nome}</p>
                </div>
                <div className="content-comment-text">
                  <p>{comment.comentario}</p>
                </div>
                <div className={`container-excluir-text`}>
                  <p
                    onClick={() => {
                      deleteCommentByUser(comment.id, setResponseErrorDelete);
                    }}
                  >
                    Excluir
                  </p>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="container-comment">
              <div className="comment-img-container">
                <img src={comment.user.foto} alt="" />
              </div>
              <div className="container-comment-text">
                <div className="container-nome-user">
                  <p>{comment.user.nome}</p>
                </div>
                <div className="content-comment-text">
                  <p>{comment.comentario}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import "./style.css";
import { Comment } from "../comment/index";
import { postComment } from "../../../../api/client/comments/postComment";
import { Rating } from "@mui/material";
import { ModalAvaliacao } from "./Modal";

export const MainMoreAboutDrivers = ({ props }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    id: 0,
    nome: "",
    data_nascimento: "",
    inicio_carreira: "",
    id_preco: {
      faixa_preco: "",
    },
    van: [
      {
        modelo: [
          {
            modelo: "",
          },
        ],
      },
    ],
    descricao: "",
    telefone: "",
    email: "",
  });

  const [comment, setComment] = useState({
    comentario: "",
    id_usuario: 0,
    id_motorista: 0,
  });

  const [responseError, setResponseError] = useState({});

  const [selectedValueAvaliacao, setSelectedValueAvaliacao] = useState({
    value: 0,
    id: 0,
  });

  const dataAtual = new Date().getFullYear();

  useEffect(() => {
    loadDriverById(location.state, setDriver);
  });

  useEffect(() => {
    if (selectedValueAvaliacao.id !== 0) {
    }
  }, [selectedValueAvaliacao]);

  return (
    <main className="main-MoreAboutDrivers">
      <div className="show-part-container">
        <div className="photo-describe-informations">
          <div className="lil-card-describing-container">
            <div className="photo-container">
              <img src={driver.foto} alt="" />
            </div>
            <div className="lil-card-descring-infos-container">
              <div className="lil-card-describing-infos-content">
                <p className="main-infos">Sobre mim:</p>
                <p className="infos-about">Nome: {driver.nome}</p>
                <p className="infos-about">
                  Idade: {dataAtual - driver.data_nascimento.split("/")[2]} anos
                </p>
                <p className="infos-about">
                  {dataAtual - driver.inicio_carreira.split("/")[2]} anos de
                  transportador
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-avaliacao">
        <ModalAvaliacao
          props={{
            id: driver.id,
          }}
        />
      </div>

      <div className="show-part-container">
        <div className="photo-describe-informations">
          <Carousel
            navButtonsAlwaysVisible={true}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {driver.van.map((element) => {
              return (
                <>
                  <div className="container-carousel-van">
                    <div className="photo-container">
                      <img src={element.foto} alt="" />
                    </div>
                    <div className="lil-card-descring-infos-container">
                      <div className="lil-card-describing-infos-content">
                        <p>Van:</p>
                        <p>Vagas: {element.quantidade_vagas}</p>
                        <p>Placa: {element.placa}</p>
                        <p>Modelo: {element.modelo[0].modelo}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className="container-button-contratar">
          <button
            onClick={() => {
              navigate("/contract", { state: driver.id });
            }}
            className="Contratar-button-perfil"
          >
            {" "}
            CONTRATAR
          </button>
        </div>
      </div>
      <div className="infos-part-container">
        <div className="more-about-driver-card">
          <p className="Average-price-driver">
            Preço de Serviço: R${driver.id_preco.faixa_preco}
          </p>
          <div className="message-content">
            <p>{driver.descricao}</p>
          </div>
          <div className="contact-content">
            <p>{driver.telefone}</p>
            <p>{driver.email}</p>
          </div>
        </div>
        <div className="Comment-area">
          <div className="filter-container-part">
            <div
              className="container-comment-part"
              onChange={(e) => {
                setComment({
                  comentario: e.target.value,
                  id_motorista: driver.id,
                  id_usuario: localStorage.getItem("id"),
                });
              }}
            >
              <input
                className="input-comment-something"
                type="text"
                placeholder="Insira um comentario"
              />
            </div>
            <button
              className="button-send-comment"
              onClick={() => {
                if (
                  comment.comentario !== "" &&
                  comment.id_motorista !== 0 &&
                  comment.id_usuario !== 0
                ) {
                  postComment(comment, setResponseError);
                }
              }}
            >
              ENVIAR
            </button>
          </div>
          <div className="comments-part">
            <Comment
              props={{
                idDriver: driver.id,
              }}
            ></Comment>
          </div>
        </div>
      </div>
    </main>
  );
};

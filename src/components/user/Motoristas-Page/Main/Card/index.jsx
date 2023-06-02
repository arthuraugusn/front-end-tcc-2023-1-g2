import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./style.css";

export const Card = ({ driver }) => {
  const navigate = useNavigate();

  const [status, setStatus] = useState(0);

  const dataAtual = new Date().getFullYear();

  return (
    <>
      {driver.map((drivers) => (
        <div
          onClick={() => {
            navigate(
              "/more-about-the-driver",
              { state: drivers.id },
              localStorage.setItem("id_driver", drivers.id)
            );
          }}
          key={drivers.id}
          className="card-driver"
        >
          <div className="container-image">
            <img src={drivers.foto} alt="Foto motorista" />
          </div>
          <div className="container-all-infos">
            <div className="nome-score">
              <span className="nome-motorista">{drivers.nome}</span>
              <div className="container-avaliacao-motorista card-avaliacao-motorista">
                <AiFillStar
                  color="var(--button-contract-yellow)"
                  className="star container-star"
                />
                <p>{drivers.avaliacao}</p>
              </div>
            </div>

            <div className="infos-contratar">
              <div className="infos-motorista">
                <p className="info idade">
                  Idade: {dataAtual - drivers.data_nascimento.split("/")[2]}{" "}
                  anos
                </p>
                <p className="info vagas">
                  Vagas disponíveis: {drivers.van[0].quantidade_vagas}
                </p>
                <p className="info tempo-carreira">
                  Tempo de carreira:{" "}
                  {dataAtual - drivers.inicio_carreira.split("/")[2]} anos
                </p>
              </div>
              <div className="button-contratar">
                <button>Ver Perfil</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

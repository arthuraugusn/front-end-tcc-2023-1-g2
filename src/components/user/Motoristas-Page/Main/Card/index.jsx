import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
            console.log(drivers.id);
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
                <button
                  onClick={() => {
                    navigate("/contract", { state: drivers.id });
                  }}
                >
                  CONTRATAR
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

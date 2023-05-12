import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";
import { useEffect } from "react";
export const CardsNotifications = ({ props }) => {
  console.log(localStorage.getItem("status_user_driver"));

  const [buttonStyleMessage, setButtonStyleMessage] = useState({
    message: "",
    status: 0,
  });

  useEffect(() => {
    if (localStorage.getItem("status_user_driver") == 1) {
      setButtonStyleMessage({
        message: "Aceitar contrato",
        status: 200,
      });
    } else if (localStorage.getItem("status_user_driver") == 2) {
      setButtonStyleMessage({
        message: "Contrato em espera",
      });
    }
  }, []);

  return props.userContracts.map((contract) => {
    if (contract.status_contrato == 0) {
      return (
        <>
          <div className="card-notifications">
            <div className="container-all-infos">
              <div className="nome-container">
                <span className="nome-motorista-notifications">
                  {contract.motorista.nome}
                </span>
              </div>
              <div className="infos-contratar-geral">
                <div className="infos-motorista-geral-container">
                  <div className="infos-motorista-geral-content">
                    <p className="infos">
                      Tipo de contrato: {contract.tipo_contrato.tipo_contrato}
                    </p>
                    <p className="infos">Escola: {contract.escola.nome}</p>
                    <p className="infos">
                      Passageiro: {contract.nome_passageiro}
                    </p>
                  </div>
                </div>
                <div className="infos-endereco-geral-container">
                  <div className="infos-endereco-geral-content">
                    <p className="info-endereco">Endereço:</p>
                    <p className="infos-geral">Rua Jatoba, n 120</p>
                    <p className="infos-geral">06298230</p>
                    <p className="infos-geral">babueri</p>
                    <p className="infos-geral">Itapevi- jardim sao carlos</p>
                  </div>
                </div>
                <div className="AcceptWait-button-container">
                  <div className="AcceptWait-content">
                    <div className="button-AcceptWait">
                      <button
                        onClick={() => {
                          if (buttonStyleMessage.status == 200) {
                            console.log("kkk");
                          }
                        }}
                      >
                        {buttonStyleMessage.message}
                      </button>
                    </div>
                    <div className="cancel-button">
                      <button>Cancelar Contrato</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });
};

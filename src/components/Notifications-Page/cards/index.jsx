import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import { updateContract } from "../../../api/client/updateContract";
import Swal from "sweetalert2";
export const CardsNotifications = ({ props }) => {
  const [buttonStyleMessage, setButtonStyleMessage] = useState({
    message: "",
    status: 0,
    color: "yellow",
  });

  const [requisition, setRequisitions] = useState({
    status: 0,
    contrato: {},
  });

  const [responseError, setResponseError] = useState({
    code: 0,
    result: "",
  });
  const [enderecoUsuario, setEnderecoUsuario] = useState({
    data: {
      endereco: {
        numero: "",
        bairro: "",
        logradouro: "",
      },
    },
  });

  const [statusUser, setStatusUser] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("status_user_driver") == 1) {
      setButtonStyleMessage({
        message: "Aceitar contrato",
        status: 200,
        color: "yellow",
      });
      setStatusUser(1);
    } else if (localStorage.getItem("status_user_driver") == 2) {
      setButtonStyleMessage({
        message: "Contrato em espera",
        color: "yellow",
      });
      setStatusUser(2);
    }
  }, []);

  useEffect(() => {
    if (requisition.status === 1) {
      if (requisition.contrato !== {}) {
        updateContract(
          requisition.contrato.id,
          requisition.contrato,
          setResponseError
        );
      }
    }
  }, [requisition]);

  useEffect(() => {
    if (responseError.code === 201) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Seu contrato foi aceito com sucesso",
      }).then((response) => {
        if (response.value === true) {
          navigate("/contracts");
        }
      });
    }
  }, [responseError]);

  return props.userContracts.map((contract) => {
    if (contract.status_contrato === 0) {
      if (statusUser === 2) {
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
                      <div className={`button-AcceptWait`}>
                        <button className={buttonStyleMessage.color}>
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
      } else if (statusUser == 1) {
        return (
          <>
            <div className="card-notifications">
              <div className="container-all-infos">
                <div className="nome-container">
                  <span className="nome-motorista-notifications">
                    {contract.usuario.nome}
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
                      <div className={`button-AcceptWait`}>
                        <button
                          className={buttonStyleMessage.color}
                          onClick={() => {
                            if (buttonStyleMessage.status == 200) {
                              setRequisitions({
                                status: 1,
                                contrato: contract,
                              });
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
    }
  });
};

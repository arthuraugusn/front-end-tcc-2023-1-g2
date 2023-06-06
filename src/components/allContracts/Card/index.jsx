import { Navigate } from "react-router-dom";
import "./style.css";
import React, { useState } from "react";
import { Modal } from "../../../templates/Modal/index";

export const CardContract = ({ props }) => {
  return props.contracts.map((contract) => {
    if (contract.status_contrato == 1) {
      if (localStorage.getItem("status_user_driver") === "1") {
        return (
          <>
            <div
              key={contract.id}
              className="card-contracts"
            >
              <div className="container-image-contracts">
                <img src={contract.usuario.foto} alt="Foto motorista" />
              </div>
              <div className="container-all-infos-all-contracts">
                <div className="infos-contratar">
                  <div className="infos-motorista-container">
                    <div className="nome-container">
                      <h2 className="nome-motorista">
                        {contract.usuario.nome}
                      </h2>
                    </div>
                    <div className="infos-motorista-content">
                      <p className="infos">
                        Telefone do Motorista: {contract.motorista.telefone}
                      </p>
                      <p className="infos">
                        Email do motorista: {contract.motorista.email}
                      </p>
                      <p className="infos">
                        Tipo de contrato: {contract.tipo_contrato.tipo_contrato}
                      </p>
                      <p className="infos">Escola: {contract.escola.nome}</p>
                      <p className="infos">
                        Passageiro: {contract.nome_passageiro}
                      </p>
                    </div>
                  </div>
                  <div className="infos-endereco-container-contract">
                    <div className="infos-endereco-content">
                      <h2 className="container-h2-endereco">Endereço:</h2>
                    </div>
                    <div>
                      <p className="info-adds">Rua Jatoba, n 120</p>
                      <p className="info-adds">{contract.usuario.cep}</p>
                      <p className="info-adds">babueri</p>
                      <p className="info-adds">Itapevi- jardim sao carlos</p>
                    </div>
                  </div>
                  <div className="deletar-button-container">
                    <div>
                      <div className="button-deletar">
                        <button
                          onClick={() => {
                            props.setOpenCloseModal({
                              status: true,
                              value: props.openCloseModal.value,
                            });
                            props.setIdContract(contract.id);
                          }}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div
              key={contract.id}
              className="card-contracts"
            >
              <div className="container-image-contracts">
                <img src={contract.motorista.foto} alt="Foto motorista" />
              </div>
              <div className="container-all-infos-all-contracts">
                <div className="infos-contratar">
                  <div className="infos-motorista-container">
                    <div className="nome-container">
                      <h2 className="nome-motorista">
                        {contract.motorista.nome}
                      </h2>
                    </div>
                    <div className="infos-motorista-content">
                      <p className="infos">
                        Telefone do responsável: {contract.usuario.telefone}
                      </p>
                      <p className="infos">
                        Email do responsável: {contract.usuario.email}
                      </p>
                      <p className="infos">
                        Tipo de contrato: {contract.tipo_contrato.tipo_contrato}
                      </p>
                      <p className="infos">Escola: {contract.escola.nome}</p>
                      <p className="infos">
                        Passageiro: {contract.nome_passageiro}
                      </p>
                    </div>
                  </div>
                  <div className="infos-endereco-container-contract">
                    <div className="infos-endereco-content">
                      <h2 className="container-h2-endereco">Endereço:</h2>
                    </div>
                    <div>
                      <p className="info-adds">Rua Jatoba, n 120</p>
                      <p className="info-adds">{contract.usuario.cep}</p>
                      <p className="info-adds">babueri</p>
                      <p className="info-adds">Itapevi- jardim sao carlos</p>
                    </div>
                  </div>
                  <div className="deletar-button-container">
                    <div>
                      <div className="button-deletar">
                        <button
                          onClick={() => {
                            props.setOpenCloseModal({
                              status: true,
                              value: props.openCloseModal.value,
                            });
                            props.setIdContract(contract.id);
                          }}
                        >
                          x
                        </button>
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

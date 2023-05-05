import { Navigate } from "react-router-dom";
import "./style.css";
import React, { useState } from "react";
import { Modal } from "../../../templates/Modal/index";

export const CardContract = ({ props }) => {
  return (
    <>
      {props.contracts.map((contract) => (
        <div
          onClick={() => {
            console.log(contract.id);
          }}
          key={contract.id}
          className="card-contracts"
        >
          <div className="container-image">
            <img src={contract.foto} alt="Foto motorista" />
          </div>
          <div className="container-all-infos">
            <div className="nome-container">
              <span className="nome-motorista">{contract.motorista.nome}</span>
            </div>
            <div className="infos-contratar">
              <div className="infos-motorista-container">
                <div className="infos-motorista-content">
                  <p className="infos">
                    Tipo de contrato: {contract.tipo_contrato.tipo_contrato}
                  </p>
                  <p className="infos">Escola: {contract.escola.nome}</p>
                  <p className="infos">
                    Passageiro: {contract.nome_passageiro}
                  </p>
                </div>
              </div>
              <div className="infos-endereco-container">
                <div className="infos-endereco-content">
                  <p className="info-endereco">Endereço:</p>
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
      ))}
    </>
  );
};

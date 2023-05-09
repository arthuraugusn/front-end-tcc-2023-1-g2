import { Navigate } from "react-router-dom"
import React, { useState } from "react";
import "./style.css"
export const CardsNotifications = ({props}) =>{
  return(
    <>
      <div className="card-notifications">
        <div className="container-all-infos">
          <div className="nome-container">
            <span className="nome-motorista">Ronaldo</span>
          </div>
          <div className="infos-contratar">
            <div className="infos-motorista-container">
              <div className="infos-motorista-content">
              <p className="infos">Tipo de contrato: ida e volta</p>
                <p className="infos">Escola: dr.Romildo feijó</p>
                <p className="infos">
                  Passageiro: manuel
                </p>
              </div>
            </div>
            <div className="infos-endereco-container">
              <div className="infos-endereco-content">
                <p className="info-endereco">Endereço:</p>
                <p className="infos-geral">Rua Jatoba, n 120</p>
                <p className="infos-geral">06298230</p>
                <p className="infos-geral">babueri</p>
                <p className="infos-geral">Itapevi- jardim sao carlos</p>
              </div>
            </div>
            <div className="AcceptWait-button-container">
              <div>
                <div className="AcceptWait-content">
                  <div className="button-AcceptWait">
                  <button>Contrato em espera</button>
                  </div>
                  <div className="cancel-button">
                  <button>Cancelar Contrato</button>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}
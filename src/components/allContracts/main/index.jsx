import { useEffect, useState } from 'react';
import './style.css'

export const ContractsPage = () => {
  useEffect(() => {

  })
  return (
    <main className='main-container-allcontracts'>
      <div className="name-container">
        <h1>Seus Contratos</h1>
      </div>
      <div className="allContracts-container">
        <div>
          <div className="card-contracts">
            <div className="container-image">
              <img alt="Foto motorista" />
            </div>
            <div className="container-all-infos">
              <div className="nome-score">
                <span className="nome-motorista">Joiwton</span>
              </div>
              <div className="infos-contratar">
                <div className="infos-motorista">
                  <p className="infos">Tipo de contrato: </p>
                  <p className="infos">
                    Escola: { }
                  </p>
                  <p className="infos">Passageiro:</p>
                </div>
                <div className="infos-endereco-container">
                  <div className="infos-endereco-content">
                    <p className="info-endereco">Endereço:</p>
                    <p className="Rua-e-numero">Rua Jatoba, n 120</p>
                    <p className="cep">06184240</p>
                    <p className="municipio">babueri</p>
                    <p className="bairro">Itapevi- jardim sao carlos</p>
                  </div>
                </div>
                <div className="deletar-button-container">
                  <div>
                    <div className="button-deletar">
                      <button>x</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}
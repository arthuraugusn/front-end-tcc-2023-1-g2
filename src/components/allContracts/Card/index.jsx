import { Navigate } from 'react-router-dom';
import "style.css"

export const Card = ({ }) => {
  return (


    <div className="card-contracts">
      <div className="container-image">
        <img alt="Foto motorista" />
      </div>
      <div className="container-all-infos">
        <div className="nome-container">
          <span className="nome-motorista">Joiwton</span>
        </div>
        <div className="infos-contratar">
          <div className="infos-motorista">
            <p className="infos">Tipo de contrato: ida e volta</p>
            <p className="infos">
              Escola: Sesi-Osasco
            </p>
            <p className="infos">Passageiro: Zé da manga</p>
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

  )
}
































import { Navigate } from 'react-router-dom';
import "./style.css"

export const CardContract = ({ contracts }) => {
  return (
    <>
      {contracts.map((contract) => (
        <div onClick={() => {
          console.log(contract.id)
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
              <div className="infos-motorista">
                <p className="infos">Tipo de contrato: {contract.tipo_contrato.tipo_contrato}</p>
                <p className="infos">
                  Escola: {contract.escola.nome}
            </p>
                <p className="infos">Passageiro: {contract.nome_passageiro}</p>
              </div>
              <div className="infos-endereco-container">
                <div className="infos-endereco-content">
                  <p className="info-endereco">Endereço:</p>
                  <p className="Rua-e-numero">Rua Jatoba, n 120</p>
                  <p className="cep">{contract.usuario.cep}</p>
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
      ))}
    </>
  )
}
































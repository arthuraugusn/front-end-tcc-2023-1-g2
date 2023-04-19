import { ButtonNextContract } from "../Button";
import { InputContainer } from "./InputContainter";
// import { loadSchools } from "../../../api/client/loadSchools.js";
import { loadTypetransport } from "../../../api/client/loadTypetransport.js";
import { loadTypeofPay } from "../../../api/client/loadTypeofPay";
// import { loadUserbyId } from "../../../api/client/loadUserbyId";
import "./style.css";
import { useEffect, useState } from "react";
import { loadContracts } from "../../../api/client/loadConcracts";

export const MainContractPage = ({ props }) => {
  const propsNextContract = {
    key: "prox-contract",
    label: "Próximo",
    nav: "/",
  };

  let contractJson = {};

  const [school, setSchoolDriver] = useState([]);

  const [typesPayment, setTypeofPay] = useState([]);

  const [typesContracts, setTypesContracts] = useState([]);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // loadSchools(setSchool);
    loadTypetransport(setTypesContracts);
    loadTypeofPay(setTypeofPay);
    loadContracts(setContracts)
  }, []);

  console.log(contracts);
  const Nomes = contracts.map(contract => {
    const nomePassageiro =  contract.nome_passageiro
    const idadePassageiro = contract.idade_passageiro
    const modelo = contract.motorista.van.map(van =>{
      return van.modelo.map(modelo =>{
        return modelo.modelo
      })
    })
    
  })

  // const modeloVan = contracts.map(contract => {
  //   const nomePassageiro =  contract.nome_passageiro
  //   const modelo = contract.motorista.van.map(van =>{
  //     return van.modelo.map(modelo =>{
  //       return modelo.modelo
  //     })
  //   })
    
  // })

  const teste = () => {
    console.log('teste');
    
  }  

  return (
    <main className="container-all-main-contract">
      <header>
        <span className="contrate-name">Contrato</span>
      </header>
      <div className="container-inputs-contrate">
        <div className="dropdown-container">
          <div className="dropdown-content">
            <label htmlFor="password" className="placeholder">
              Escola:
            </label>
            <select
              className="selects"
              name="filtros"
              id="select-filter-container-contract-type"
            >
              {school.map((school) => {
                return <option value={school.id}>{school.nome}</option>;
              })}
            </select>
          </div>
          <div className="dropdown-content">
            <label htmlFor="password" className="placeholder">
              Tipo de transporte:
            </label>
            <select
              className="selects"
              name="filtros"
              id="select-filter-container-school"
            >
              {typesContracts.map((typeOftheContract) => {
                return (
                  <option value={typeOftheContract.id}>
                    {typeOftheContract.tipo_contrato}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="input-container-geral">
          <div>
            {/* {(onChange = (e) => {})} */}
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nome do responsável",
                classNameInput: "input-contract",
              }}
            />
          </div>
          <div>
            {/* {(onChange = (e) => {})} */}
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nome do passageiro",
                classNameInput: "input-contract",
              }}
            />
          </div>
          <div>
            {/* {(onChange = (e) => {})} */}
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Idade do passageiro:",
                classNameInput: "input-contract",
              }}
            />
          </div>
        </div>

        <div className="dropdown-container">
          <div className="dropdown-content">
            <label htmlFor="password" className="placeholder">
              Tipo de pagamento:
            </label>
            <select
              className="selects"
              name="filtros"
              id="select-filter-container-school"
            >
              {typesPayment.map((typePayment) => {
                return (
                  <option value={typePayment.id}>
                    {typePayment.tipo_pagamento}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="button-container">
        <ButtonNextContract props={propsNextContract}></ButtonNextContract>
      </div>
    </main>
  );
};


{
  schools: [
    {
      id_escola: 1,
      nome_motorista: 1,
      nome_escola: 'teste'
    },
    {
      id_escola: 1,
      nome_motorista: 1,
      nome_escola: 'teste'
    },
    {
      id_escola: 1,
      nome_motorista: 1,
      nome_escola: 'teste'
    },
    {
      id_escola: 1,
      nome_motorista: 1,
      nome_escola: 'teste'
    },
  ]
}
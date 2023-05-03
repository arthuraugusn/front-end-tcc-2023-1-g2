import { ButtonNextContract } from "../Button";
import { InputContainer } from "./InputContainter";
// import { loadSchools } from "../../../api/client/loadSchools.js";
import { loadTypetransport } from "../../../api/client/loadTypetransport.js";
import { loadTypeofPay } from "../../../api/client/loadTypeofPay";
// import { loadUserbyId } from "../../../api/client/loadUserbyId";
import "./style.css";
import { useEffect, useState } from "react";
import { loadContracts } from "../../../api/client/loadConcracts";
import { loadSchoolsDrivers } from "../../../api/client/loadSchools";

export const MainContractPage = ({ props }) => {
  const propsNextContract = {
    key: "prox-contract",
    label: "Próximo",
    nav: "/",
  };

  const [itensContract, setItensContract] = useState({});

  const [school, setSchoolDriver] = useState({});

  const [typesPayment, setTypeofPay] = useState([]);

  const [typesContracts, setTypesContracts] = useState({});

  const [contract, setInfosContract] = useState({});

  const [responseError, setResponseError] = useState(0);

  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    loadSchoolsDrivers(setSchoolDriver, setResponseError);
    loadTypetransport(setTypesContracts, setResponseError);
    loadTypeofPay(setTypeofPay, setResponseError);
    loadContracts(setContracts);
  }, []);

  useEffect(() => {
    if (responseError == 200) {
      setItensContract({
        tipo_contrato: typesContracts.map((e) => {
          return e.tipo_contrato;
        }),
        id_tipo_contrato: typesContracts.map((e) => {
          return e.id;
        }),
        tipo_pagamento: typesPayment.map((e) => {
          return e.tipo_pagamento;
        }),
        id_tipo_pagamento: typesPayment.map((e) => {
          return e.id;
        }),
        escolas: school.map((e) => {
          return e.nome;
        }),
        id_escolas: school.map((e) => {
          return e.id;
        }),
      });
    }
  }, [typesContracts]);

  useEffect(() => {
    console.log(itensContract);
  }, [itensContract]);

  const Nomes = contracts.map((contract) => {
    const nomePassageiro = contract.nome_passageiro;
    const idadePassageiro = contract.idade_passageiro;
    const modelo = contract.motorista.van.map((van) => {
      return van.modelo.map((modelo) => {
        return modelo.modelo;
      });
    });
  });

  // const modeloVan = contracts.map(contract => {
  //   const nomePassageiro =  contract.nome_passageiro
  //   const modelo = contract.motorista.van.map(van =>{
  //     return van.modelo.map(modelo =>{
  //       return modelo.modelo
  //     })
  //   })

  // })

  {
    /*  */
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
              {
                <option id={itensContract.id_escolas}>
                  {itensContract.escolas}
                </option>
                /* 
              {school.map((school) => {
                return <option value={school.id}>{school.nome}</option>;
              })} */
              }
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
              {
                <option id={itensContract.id_tipo_contrato}>
                  {itensContract.tipo_contrato}
                </option>
              }
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
              {
                <option id={itensContract.id_tipo_pagamento}>
                  {itensContract.tipo_pagamento}
                </option>
              }
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

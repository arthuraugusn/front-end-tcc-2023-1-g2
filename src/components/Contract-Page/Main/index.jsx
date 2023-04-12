import { ButtonNextContract } from "../Button";
import { InputContainer } from "./InputContainter";
import { loadSchools } from "../../../api/client/loadSchools.js";
import { loadTypetransport } from "../../../api/client/loadTypetransport.js";
import { loadTypeofPay } from "../../../api/client/loadTypeofPay";
import "./style.css";
import { useEffect, useState } from "react";

export const MainContractPage = ({ props }) => {
  const propsNextContract = {
    key: "prox-contract",
    label: "Próximo",
    nav: "/",
  };

  const [school, setSchool] = useState([]);

  useEffect(() => {
    loadSchools(setSchool);
  }, []);

  const [typesContracts, setTypesTransport] = useState([]);

  useEffect(() => {
    loadTypetransport(setTypesTransport);
  }, []);

  const [typesPayment, setTypeofPay] = useState([]);

  useEffect(() => {
    loadTypeofPay(setTypeofPay);
  }, []);

  return (
    <main className="container-all-main-contract">
      <header>
        <span className="contrate-name">Contrato</span>
      </header>
      <div className="container-inputs-contrate">
        <div className="inputs-content">
          <div className="dropdown-container">
            <div className="dropdown-content">
              <label htmlFor="password" className="placeholder">
                Escola:
              </label>
              <select
                className="selects"
                name="filtros"
                id="select-filter-container-contract-type"
                onClick={() => {}}
              >
                {school.map((school) => {
                  return <option value={school.nome}>{school.nome}</option>;
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
                {typesPayment.map((typeTrip) => {
                  return (
                    <option value={typeTrip.tipo_contrato}>
                      {typeTrip.tipo_contrato}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="input-container-geral">
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nome do responsável",
                classNameInput: "input-contract",
              }}
            />
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nome do passageiro",
                classNameInput: "input-contract",
              }}
            />
            <InputContainer
              props={{
                classNameLabel: "placeHolder",
                nameInput: "Idade do passageiro:",
                classNameInput: "input-contract",
              }}
            />
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
                <option value="">Escolha um tipo de pagamento</option>
                {typesContracts.map((typeOfthePay) => {
                  return <option value="">{typeOfthePay.tipo_contrato}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="button-container">
            <ButtonNextContract props={propsNextContract}></ButtonNextContract>
          </div>
        </div>
      </div>
    </main>
  );
};

import { ButtonNextContract } from "../Button";
import { InputContainer } from "./InputContainter";
import { loadSchools } from "../../../api/client/loadSchools.js";
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
                <option value="">Escolha a escola</option>
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
                <option value="">Escolha o tipo de transporte</option>
                <option value="">b</option>
                <option value="">c</option>
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

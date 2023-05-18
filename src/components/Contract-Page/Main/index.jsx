import { ButtonNextContract } from "../Button";
import { InputContainer } from "./InputContainter";
import { loadTypetransport } from "../../../api/client/loadTypetransport.js";
import { loadTypeofPay } from "../../../api/client/loadTypeofPay";
import "./style.css";
import { useEffect, useState } from "react";
import { loadContracts } from "../../../api/client/loadConcracts";
import { loadSchoolsDrivers } from "../../../api/client/loadSchools";
import { registerContract } from "../../../api/client/registerContract";
import api from "../../../api/api";
import { FormControl, Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { loadUserbyId } from "../../../api/client/loadUserbyId";
import Swal from "sweetalert2";
import { loadSchoolsDriverById } from "../../../api/driver/loadSchoolsDriverById";

export const MainContractPage = ({ props }) => {
  const propsNextContract = {
    key: "prox-contract",
    label: "Próximo",
    nav: "/",
  };

  const navigate = useNavigate();

  const [school, setSchoolDriver] = useState([]);

  const [typesPayment, setTypeofPay] = useState([]);

  const [typesContracts, setTypesContracts] = useState([]);

  const [contract, setInfosContract] = useState({
    id_escola: 0,
    id_tipo_contrato: 0,
    id_tipo_pagamento: 0,
    status: 0,
  });

  const [responseError, setResponseError] = useState(0);

  const [contracts, setContracts] = useState([]);

  const [clientInfos, setClientInfos] = useState({
    nome_passageiro: "",
    idade_passageiro: "",
  });

  const [responseErrorGet, setResponseErrorGet] = useState(0);

  const [schools, setSchools] = useState({
    response: {
      schools: [
        {
          id_escola: 0,
          id: 0,
          nome_escola: "",
        },
      ],
    },
    code: 0,
  });

  const [status, setStatus] = useState(0);

  const idUsuarioMotorista = localStorage.getItem("id");

  const [user, setUser] = useState({});

  const locate = useLocation();

  useEffect(() => {
    loadSchoolsDriverById(locate.state, setSchools);
    loadSchoolsDrivers(setSchoolDriver, setResponseErrorGet);
    loadTypetransport(setTypesContracts, setResponseErrorGet);
    loadTypeofPay(setTypeofPay, setResponseErrorGet);
    loadContracts(setContracts);
    loadUserbyId(idUsuarioMotorista, setUser);
  }, []);

  useEffect(() => {
    const testeDriverClient = localStorage.getItem("status_user_driver");
    if (status == 1) {
      if (testeDriverClient == 1) {
        const idMotorista = locate.state;
        setInfosContract({
          id_escola: contract.id_escola,
          id_tipo_contrato: contract.id_tipo_contrato,
          id_tipo_pagamento: contract.id_tipo_pagamento,
          nome_passageiro: clientInfos.nome_passageiro,
          id_usuario: idUsuarioMotorista,
          id_motorista: idMotorista,
          idade_passageiro: clientInfos.idade_passageiro,
          status: 1,
        });
      } else if (testeDriverClient == 2) {
        const idMotorista = locate.state;
        setInfosContract({
          id_escola: contract.id_escola,
          id_tipo_contrato: contract.id_tipo_contrato,
          id_tipo_pagamento: contract.id_tipo_pagamento,
          nome_passageiro: clientInfos.nome_passageiro,
          id_usuario: parseInt(idUsuarioMotorista),
          id_motorista: idMotorista,
          idade_passageiro: clientInfos.idade_passageiro,
          status: 1,
        });
      }
    }
  }, [status]);

  useEffect(() => {
    if (contract.status == 1) {
      if (
        contract.id_escola == null ||
        contract.id_escola == undefined ||
        contract.id_escola == "" ||
        contract.id_tipo_contrato == null ||
        contract.id_tipo_contrato == undefined ||
        contract.id_tipo_contrato == "" ||
        contract.id_tipo_pagamento == null ||
        contract.id_tipo_pagamento == undefined ||
        contract.id_tipo_pagamento == "" ||
        contract.id_usuario == null ||
        contract.id_usuario == undefined ||
        contract.id_usuario == "" ||
        contract.id_motorista == null ||
        contract.id_motorista == undefined ||
        contract.id_motorista == "" ||
        contract.nome_passageiro == null ||
        contract.nome_passageiro == undefined ||
        contract.nome_passageiro == "" ||
        contract.idade_passageiro == null ||
        contract.idade_passageiro == undefined ||
        contract.idade_passageiro == ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Não foi posível concluir o contrato. Tente novamente",
        }).then(() => {
          window.location.reload();
        });
      } else {
        navigate("/contract/finish", { state: contract });
      }
    }
  }, [contract.status]);

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

            {
              <select
                className="selects"
                name="filtros"
                onChange={(e) => {
                  setInfosContract({
                    id_escola: parseInt(
                      e.currentTarget.childNodes[e.currentTarget.selectedIndex]
                        .id
                    ),
                    id_tipo_contrato: contract.id_tipo_contrato,
                    id_tipo_pagamento: contract.id_tipo_pagamento,
                  });
                }}
              >
                <option>Escolha a escola</option>
                {schools.response.schools.map((elemento) => {
                  return (
                    <option id={elemento.id_escola} key={elemento.id}>
                      {elemento.nome_escola}
                    </option>
                  );
                })}
              </select>
            }
          </div>
          <div className="dropdown-content">
            <label htmlFor="password" className="placeholder">
              Tipo de transporte:
            </label>
            <select
              className="selects"
              name="filtros"
              id="select-filter-container-school"
              onChange={(e) => {
                setInfosContract({
                  id_escola: contract.id_escola,
                  id_tipo_contrato: parseInt(
                    e.currentTarget.childNodes[e.currentTarget.selectedIndex].id
                  ),

                  id_tipo_pagamento: contract.id_tipo_pagamento,
                });
              }}
            >
              <option>Escolha o tipo de contrato</option>
              {typesContracts.map((elemento) => {
                return (
                  <option id={elemento.id} key={elemento.id}>
                    {elemento.tipo_contrato}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="input-container-geral">
          <div>
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nome do responsável",
                classNameInput: "input-contract",
                placeholder: user.nome,
                status: true,
              }}
            />
          </div>
          <div
            onChange={(e) => {
              setClientInfos({
                nome_passageiro: e.target.value,
                idade_passageiro: clientInfos.idade_passageiro,
              });
            }}
          >
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nome do passageiro",
                classNameInput: "input-contract",
              }}
            />
          </div>
          <div
            onChange={(e) => {
              setClientInfos({
                nome_passageiro: clientInfos.nome_passageiro,
                idade_passageiro: e.target.value,
              });
            }}
          >
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
              onChange={(e) => {
                setInfosContract({
                  id_escola: contract.id_escola,
                  id_tipo_contrato: contract.id_tipo_contrato,
                  id_tipo_pagamento: parseInt(
                    e.currentTarget.childNodes[e.currentTarget.selectedIndex].id
                  ),
                });
              }}
            >
              <option>Escolha o tipo de pagamento</option>
              {typesPayment.map((elemento) => {
                return (
                  <option id={elemento.id} key={elemento.id}>
                    {elemento.tipo_pagamento}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div
        className="button-container"
        onClick={() => {
          setStatus(1);
        }}
      >
        <ButtonNextContract props={propsNextContract}></ButtonNextContract>
      </div>
    </main>
  );
};

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerDriverClient } from "../../../../../api/driver/registerUserClient";
import { InputContainer } from "../../../../Contract-Page/Main/InputContainter";
import { ButtonSalvarUsuario } from "../Button";
import "./style.css";

export const FormsInfosDriver = () => {
  const propsSalvarMotorista = {
    key: "button-save-client",
    label: "Salvar",
    nav: "#",
  };

  let driverJson = {};

  const [responseError, setResponseError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(responseError);

    if (responseError.status == 201) {
      navigate("/login");
    }
  }, [responseError]);

  const location = useLocation();

  return (
    <>
      <div className="container-inputs-more-infos">
        <div className="container-all-infos-user">
          <div className="container-rg-cpf-telefone">
            <div
              onChange={(e) => {
                driverJson.rg = e.target.value;
              }}
            >
              <InputContainer
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "RG:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div
              onChange={(e) => {
                driverJson.cpf = e.target.value;
              }}
            >
              <InputContainer
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "CPF:",
                  classNameInput: "inputs-more-infos",
                }}
              />
              <div
                className="container-telefone"
                onChange={(e) => {
                  driverJson.telefone = e.target.value;
                }}
              >
                <InputContainer
                  props={{
                    classNameLabel: "placeholder",
                    nameInput: "Telefone:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="container-datanasc-cnh-inicarreira">
            <div
              onChange={(e) => {
                driverJson.data_nascimento = e.target.value;
              }}
            >
              <InputContainer
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "Data de nascimento:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div
              onChange={(e) => {
                driverJson.cnh = e.target.value;
              }}
            >
              <InputContainer
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "CNH:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div
              className="container-data-inic-carreira"
              onChange={(e) => {
                driverJson.inicio_carreira = e.target.value;
              }}
            >
              <InputContainer
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "Data de início de carreira:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="button-save-client"
        onClick={() => {
          driverJson.nome = location.state.name;
          driverJson.email = location.state.email;
          driverJson.senha = location.state.uid;
          driverJson.foto = document.querySelector(".img-preview").id;
          driverJson.descricao = "";
          driverJson.status_motorista = 1;
          if (driverJson) {
            registerDriverClient(driverJson, setResponseError);
          }
        }}
      >
        <ButtonSalvarUsuario props={propsSalvarMotorista}></ButtonSalvarUsuario>
      </div>
    </>
  );
};

import { useLocation } from "react-router-dom";
import { registerUserClient } from "../../../../../api/client/registerUserClient";
import { InputContainer } from "../../../../Contract-Page/Main/InputContainter";
import { ButtonSalvarUsuario } from "../Button";
import "./style.css";

export const FormFirstInfos = () => {
  const propsSalvarUsuario = {
    key: "button-save-client",
    label: "Salvar",
    nav: "#",
  };

  let userJson = {};

  const location = useLocation();

  return (
    <>
      <div className="container-inputs-more-infos">
        <div className="container-all-infos-user">
          <div className="container-rg-cpf">
            <div
              onChange={(e) => {
                userJson.rg = e.target.value;
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
                userJson.cpf = e.target.value;
              }}
            >
              <InputContainer
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "CPF:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
          </div>
          <div className="container-datanasc-cep">
            <div
              onChange={(e) => {
                userJson.data_nascimento = e.target.value;
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
                userJson.cep = e.target.value;
              }}
            >
              <InputContainer
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "CEP:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="container-telefone"
          onChange={(e) => {
            userJson.telefone = e.target.value;
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
      <div
        className="button-save-client"
        onClick={() => {
          userJson.nome = location.state.name;
          userJson.email = location.state.email;
          userJson.senha = location.state.uid;
          userJson.foto = document.querySelector(".img-preview").id;
          userJson.status_usuario = 1;
          if (userJson) {
            console.log(userJson);
            registerUserClient(userJson);
          }
        }}
      >
        <ButtonSalvarUsuario props={propsSalvarUsuario}></ButtonSalvarUsuario>
      </div>
    </>
  );
};

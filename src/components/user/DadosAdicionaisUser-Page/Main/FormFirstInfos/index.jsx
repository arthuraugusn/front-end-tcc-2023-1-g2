import { useEffect, useState } from "react";
import { InputContainer } from "../../../../Contract-Page/Main/InputContainter";
import { ButtonSalvarUsuario } from "../Button";
import "./style.css";

export const FormFirstInfos = () => {
  const propsSalvarUsuario = {
    key: "button-save-client",
    label: "Salvar",
    nav: "#",
  };

  const [value, setValue] = useState({});

  return (
    <>
      <div className="container-inputs-more-infos">
        <div className="container-all-infos-user">
          <div className="container-rg-cpf">
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "RG",
                classNameInput: "inputs-more-infos",
              }}
            />
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "CPF",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
          <div className="container-datanasc-cep">
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "Data de nascimento:",
                classNameInput: "inputs-more-infos",
              }}
            />
            <InputContainer
              props={{
                classNameLabel: "placeholder",
                nameInput: "CEP",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
        </div>
        <div className="container-telefone">
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
          console.log(value);
        }}
      >
        <ButtonSalvarUsuario props={propsSalvarUsuario}></ButtonSalvarUsuario>
      </div>
    </>
  );
};

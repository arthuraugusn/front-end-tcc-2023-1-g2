import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerUserClient } from "../../../../../api/client/registerUserClient";
import { InputContainer } from "../../../../Contract-Page/Main/InputContainter";
import { ButtonSalvarUsuario } from "../Button";
import "./style.css";

export const FormFirstInfos = ({ props }) => {
  const propsSalvarUsuario = {
    key: "button-save-client",
    label: "Salvar",
    nav: "#",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (props.responseError.status == 201) {
      navigate("/login");
    }
  }, [props.responseError]);

  const location = useLocation();

  return (
    <>
      <div className="container-inputs-more-infos">
        <div className="container-all-infos-user">
          <div className="container-rg-cpf">
            <div
              onChange={(e) => {
                props.setUser({
                  img: props.user.img,
                  rg: e.target.value,
                  cpf: props.user.cpf,
                  data_nascimento: props.user.data_nascimento,
                  cep: props.user.cep,
                  telefone: props.user.telefone,
                });
              }}
            >
              <InputContainer
                props={{
                  status: props.statusInput,
                  classNameLabel: "placeholder",
                  nameInput: "RG:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div
              onChange={(e) => {
                props.setUser({
                  img: props.user.img,
                  rg: props.user.rg,
                  cpf: e.target.value,
                  data_nascimento: props.user.data_nascimento,
                  cep: props.user.cep,
                  telefone: props.user.telefone,
                });
              }}
            >
              <InputContainer
                props={{
                  status: props.statusInput,
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
                props.setUser({
                  img: props.user.img,
                  rg: props.user.rg,
                  cpf: props.user.cpf,
                  data_nascimento: e.target.value,
                  cep: props.user.cep,
                  telefone: props.user.telefone,
                });
              }}
            >
              <InputContainer
                props={{
                  status: props.statusInput,
                  type: "date",
                  classNameLabel: "placeholder",
                  nameInput: "Data de nascimento:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div
              onChange={(e) => {
                props.setUser({
                  img: props.user.img,
                  rg: props.user.rg,
                  cpf: props.user.cpf,
                  data_nascimento: props.user.data_nascimento,
                  cep: e.target.value,
                  telefone: props.user.telefone,
                });
              }}
            >
              <InputContainer
                props={{
                  status: props.statusInput,
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
            props.setUser({
              img: props.user.img,
              rg: props.user.rg,
              cpf: props.user.cpf,
              data_nascimento: props.user.data_nascimento,
              cep: props.user.cep,
              telefone: e.target.value,
            });
          }}
        >
          <InputContainer
            props={{
              status: props.statusInput,
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
          props.setUser({
            img: props.user.img,
            rg: props.user.rg,
            cpf: props.user.cpf,
            data_nascimento: props.user.data_nascimento,
            cep: props.user.cep,
            telefone: props.user.telefone,
            nome: location.state.nome,
            email: location.state.email,
            senha: location.state.senha,
            status_usuario: 1,
            status_finalizado: 1,
          });
        }}
      >
        <ButtonSalvarUsuario props={propsSalvarUsuario}></ButtonSalvarUsuario>
      </div>
    </>
  );
};

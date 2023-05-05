import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerDriverClient } from "../../../../../api/driver/registerUserClient";
import { InputContainer } from "../../../../Contract-Page/Main/InputContainter";
import { ButtonSalvarMotorista, ButtonSalvarUsuario } from "../Button";
import "./style.css";

export const FormsInfosDriver = ({ props }) => {
  const propsSalvarMotorista = {
    key: "button-save-client",
    label: "Avançar",
  };

  const [responseError, setResponseError] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <>
      <div className="container-inputs-more-infos">
        <div className="container-all-infos-driver">
          <div className="container-register-infos-driver">
            <div className="container-rg-cpf-telefone-driver">
              <div
                onChange={(e) => {
                  props.setDriverInfos({
                    nome: location.state.nome,
                    email: location.state.email,
                    senha: location.state.senha,
                    img: props.driver.img,
                    rg: e.target.value,
                    cpf: props.driver.cpf,
                    telefone: props.driver.telefone,
                    data_nascimento: props.driver.data_nascimento,
                    cnh: props.driver.cnh,
                    inicio_carreira: props.driver.inicio_carreira,
                    id_preco: props.driver.id_preco,
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
                  props.setDriverInfos({
                    nome: location.state.nome,
                    email: location.state.email,
                    senha: location.state.senha,
                    img: props.driver.img,
                    rg: props.driver.rg,
                    cpf: e.target.value,
                    telefone: props.driver.telefone,
                    data_nascimento: props.driver.data_nascimento,
                    cnh: props.driver.cnh,
                    inicio_carreira: props.driver.inicio_carreira,
                    id_preco: props.driver.id_preco,
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
              <div
                onChange={(e) => {
                  props.setDriverInfos({
                    nome: location.state.nome,
                    email: location.state.email,
                    senha: location.state.senha,
                    img: props.driver.img,
                    rg: props.driver.rg,
                    cpf: props.driver.cpf,
                    telefone: e.target.value,
                    data_nascimento: props.driver.data_nascimento,
                    cnh: props.driver.cnh,
                    inicio_carreira: props.driver.inicio_carreira,
                    id_preco: props.driver.id_preco,
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
            <div className="container-datanasc-cnh-datainic-driver">
              <div
                onChange={(e) => {
                  props.setDriverInfos({
                    nome: location.state.nome,
                    email: location.state.email,
                    senha: location.state.senha,
                    img: props.driver.img,
                    rg: props.driver.rg,
                    cpf: props.driver.cpf,
                    telefone: props.driver.telefone,
                    data_nascimento: e.target.value,
                    cnh: props.driver.cnh,
                    inicio_carreira: props.driver.inicio_carreira,
                    id_preco: props.driver.id_preco,
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
                  props.setDriverInfos({
                    nome: location.state.nome,
                    email: location.state.email,
                    senha: location.state.senha,
                    img: props.driver.img,
                    rg: props.driver.rg,
                    cpf: props.driver.cpf,
                    telefone: props.driver.telefone,
                    data_nascimento: props.driver.data_nascimento,
                    cnh: e.target.value,
                    inicio_carreira: props.driver.inicio_carreira,
                    id_preco: props.driver.id_preco,
                  });
                }}
              >
                <InputContainer
                  props={{
                    status: props.statusInput,
                    classNameLabel: "placeholder",
                    nameInput: "CNH:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
              <div
                onChange={(e) => {
                  props.setDriverInfos({
                    nome: location.state.nome,
                    email: location.state.email,
                    senha: location.state.senha,
                    img: props.driver.img,
                    rg: props.driver.rg,
                    cpf: props.driver.cpf,
                    telefone: props.driver.telefone,
                    data_nascimento: props.driver.data_nascimento,
                    cnh: props.driver.cnh,
                    inicio_carreira: e.target.value,
                    id_preco: props.driver.id_preco,
                  });
                }}
              >
                <InputContainer
                  props={{
                    status: props.statusInput,
                    type: "date",
                    classNameLabel: "placeholder",
                    nameInput: "Data de início de carreira",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="dropdown-content">
            <label className="placeholder">Preços:</label>

            <select
              name="filtros"
              className="selects"
              disabled={props.statusInput}
              onChange={(e) => {
                props.setDriverInfos({
                  nome: location.state.nome,
                  email: location.state.email,
                  senha: location.state.senha,
                  img: props.driver.img,
                  rg: props.driver.rg,
                  cpf: props.driver.cpf,
                  telefone: props.driver.telefone,
                  data_nascimento: props.driver.data_nascimento,
                  cnh: props.driver.cnh,
                  inicio_carreira: props.driver.inicio_carreira,
                  id_preco:
                    e.currentTarget.childNodes[e.currentTarget.selectedIndex]
                      .id,
                });
              }}
            >
              <option>Escolha sua faixa de preços</option>
              {props.prices.map((elemento) => {
                return (
                  <option key={elemento.id} id={elemento.id}>
                    {elemento.faixa_preco}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className="button-save-driver"
            onClick={() => {
              props.setDriverInfos({
                nome: location.state.nome,
                email: location.state.email,
                senha: location.state.senha,
                img: props.driver.img,
                rg: props.driver.rg,
                cpf: props.driver.cpf,
                telefone: props.driver.telefone,
                data_nascimento: props.driver.data_nascimento,
                cnh: props.driver.cnh,
                inicio_carreira: props.driver.inicio_carreira,
                descricao: "",
                avaliacao: 10,
                id_preco: parseInt(props.driver.id_preco),
                status_finalizado: 1,
              });
            }}
          >
            <ButtonSalvarMotorista props={propsSalvarMotorista} />
          </div>
        </div>
      </div>
    </>
  );
};

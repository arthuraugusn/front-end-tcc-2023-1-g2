import { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
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
                <div className="input-container">
                  <label className="placeholder">CPF:</label>
                  <IMaskInput
                    mask="000.000.000-00"
                    className="inputs-more-infos"
                  />
                </div>
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
                <div className="input-container">
                  <label className="placeholder">Telefone:</label>
                  <IMaskInput
                    mask="(00) 00000-0000"
                    className="inputs-more-infos"
                  />
                </div>
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
                <div className="input-container">
                  <label className="placeholder">CNH:</label>
                  <IMaskInput
                    mask="00000000000"
                    className="inputs-more-infos"
                  />
                </div>
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
                    R${elemento.faixa_preco}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className="button-save-driver"
            onClick={() => {
              if (
                props.driver.img === "" ||
                props.driver.img === undefined ||
                props.driver.img === null
              ) {
                props.setDriverInfos({
                  nome: location.state.nome,
                  email: location.state.email,
                  senha: location.state.senha,
                  img: "https://firebasestorage.googleapis.com/v0/b/tcc-project-firebase.appspot.com/o/imgs%2Fdownload.png?alt=media&token=1f6e9e4f-958e-4c0e-8b19-2c757007ad3b",
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
              } else {
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
              }
            }}
          >
            <ButtonSalvarMotorista props={propsSalvarMotorista} />
          </div>
        </div>
      </div>
    </>
  );
};

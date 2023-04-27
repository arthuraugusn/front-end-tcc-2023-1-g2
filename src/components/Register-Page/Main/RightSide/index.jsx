import { Link, useNavigate } from "react-router-dom";
import { ButtonProximoRegister } from "./Button";
import "./style.css";
import { useEffect, useState } from "react";
import { InputRegister } from "./Input";

export const RightSide = () => {
  const navigate = useNavigate();
  const propsProximo = {
    key: "button-form",
    label: "Próximo",
  };

  const [dadosUsuario, setDadosUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (status == 1) {
      navigate("/choose-page", { state: dadosUsuario });
    }
  }, [status]);

  return (
    <div className="right-side-register">
      <form className="register-form">
        <span className="form-title">Crie uma Conta</span>
        <div
          className="input-container"
          onChange={(e) => {
            setDadosUsuario({
              nome: e.target.value,
              email: dadosUsuario.email,
              senha: dadosUsuario.senha,
            });
          }}
        >
          <InputRegister
            props={{
              classNameLabel: "placeHolder",
              nameInput: "Nome",
              classNameInput: "input-register",
            }}
          />
        </div>
        <div
          className="input-container"
          onChange={(e) => {
            setDadosUsuario({
              nome: dadosUsuario.nome,
              email: e.target.value,
              senha: dadosUsuario.senha,
            });
          }}
        >
          <InputRegister
            props={{
              classNameLabel: "placeHolder",
              nameInput: "Email:",
              classNameInput: "input-register",
            }}
          />
        </div>
        <div
          className="input-container"
          onChange={(e) => {
            setDadosUsuario({
              nome: dadosUsuario.nome,
              email: dadosUsuario.email,
              senha: e.target.value,
            });
          }}
        >
          <InputRegister
            props={{
              type: "password",
              classNameLabel: "placeHolder",
              nameInput: "Senha:",
              classNameInput: "input-register",
            }}
          />
          <div
            onClick={() => {
              if (
                dadosUsuario.nome == "" ||
                dadosUsuario.nome == null ||
                dadosUsuario.nome == undefined ||
                dadosUsuario.email == "" ||
                dadosUsuario.email == null ||
                dadosUsuario.email == undefined ||
                dadosUsuario.senha == "" ||
                dadosUsuario.senha == null ||
                dadosUsuario.senha == undefined
              ) {
                alert(
                  "Você não preencheu os dados corretamente, tente de novo"
                );
              } else if (dadosUsuario.email.includes("@") != true) {
                alert("Você não preencheu o email corretamente, tente de novo");
              } else {
                setStatus(1);
              }
            }}
            className="container-button-register"
          >
            <ButtonProximoRegister props={propsProximo}></ButtonProximoRegister>
          </div>
        </div>
      </form>
    </div>
  );
};

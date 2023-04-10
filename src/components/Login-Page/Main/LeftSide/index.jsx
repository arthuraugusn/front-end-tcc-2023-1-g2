import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonEntrar } from "./Button";
import "./style.css";

export const LeftSide = () => {
  const [props, setProps] = useState([]);

  const getEmail = (e) => {
    const value = e.target.value;
    setProps({ email: value });
  };
  const getPassword = (e, email) => {
    const value = e.target.value;
    setProps({ email: email, senha: value });
  };

  const navigate = useNavigate();

  const propsButtonEntrar = {
    key: "button-form",
    label: "Entrar",
  };

  return (
    <div className="left-side">
      <form className="register-form">
        <span className="form-title">Crie uma Conta</span>

        <div className="input-container">
          <label htmlFor="email" className="placeholder">
            Email:
          </label>
          <input
            onChange={(e) => {
              getEmail(e);
            }}
            value={props.email}
            className="input"
            type="email"
            id="email"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="placeholder">
            Senha:
          </label>
          <input
            onChange={(e) => {
              getPassword(e, props.email);
            }}
            value={props.senha}
            className="input"
            type="password"
            id="password"
            required
          />
        </div>
        <div
          onClick={() => {
            navigate("/", { email: props.email, senha: props.senha });
          }}
          className="container-button-entrar"
        >
          <ButtonEntrar props={propsButtonEntrar}></ButtonEntrar>
        </div>
      </form>
    </div>
  );
};

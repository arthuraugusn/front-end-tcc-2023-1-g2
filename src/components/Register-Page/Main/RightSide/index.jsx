import { Link, useNavigate } from "react-router-dom";
import { ButtonProximoRegister } from "./Button";
import "./style.css";

export const RightSide = () => {
  const navigate = useNavigate();
  const propsProximo = {
    key: "button-form",
    label: "Próximo",
  };

  return (
    <div className="right-side-register">
      <form className="register-form">
        <span className="form-title">Crie uma Conta</span>
        <div className="input-container">
          <label htmlFor="name" className="placeHolder">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              propsProximo.jsonParam = {
                name: e.target.value,
              };
            }}
            className="input-register"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="placeHolder">
            Email:
          </label>
          <input
            onChange={(e) => {
              propsProximo.jsonParam.email = e.target.value;
            }}
            type="email"
            id="email"
            className="input-register"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="placeHolder">
            Senha:
          </label>
          <input
            onChange={(e) => {
              propsProximo.jsonParam.uid = e.target.value;
            }}
            type="password"
            id="password"
            className="input-register"
          />
          <div
            onClick={() => {
              navigate("/choose-page", { state: propsProximo.jsonParam });
            }}
            className="container-button-register"
          >
            <Link to="/choose-page" state={propsProximo.jsonParam}>
              <ButtonProximoRegister
                props={propsProximo}
              ></ButtonProximoRegister>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

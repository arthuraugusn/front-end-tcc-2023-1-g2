import { useLocation, useNavigate } from "react-router-dom";
import { ButtonChoose } from "./Button";
import "./style.css";

export const MainChoosePage = () => {
  const propsButtonCliente = {
    key: "usuario",
    label: "Cliente",
  };
  const propsButtonMotorista = {
    key: "motorista",
    label: "Motorista",
  };

  const navigate = useNavigate();

  const location = useLocation();
  return (
    <main className="container-main-choose-page">
      <div className="text-container-choose-page">
        <span className="choose-text">Selecione uma opção para registrar</span>
      </div>
      <div className="buttons-container">
        <div
          onClick={() => {
            navigate("/", { state: location.state });
          }}
        >
          <ButtonChoose props={propsButtonMotorista}></ButtonChoose>
        </div>
        <div
          onClick={() => {
            navigate("/dados-adicionais-user", { state: location.state });
          }}
        >
          <ButtonChoose props={propsButtonCliente}></ButtonChoose>
        </div>
      </div>
    </main>
  );
};

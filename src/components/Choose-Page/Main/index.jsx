import { useLocation } from "react-router-dom";
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

  const location = useLocation();
  console.log(location);
  return (
    <main className="container-main-choose-page">
      <div className="text-container-choose-page">
        <span className="choose-text">Selecione uma opção para registrar</span>
      </div>
      <div className="buttons-container">
        <ButtonChoose props={propsButtonMotorista}></ButtonChoose>
        <ButtonChoose props={propsButtonCliente}></ButtonChoose>
      </div>
    </main>
  );
};

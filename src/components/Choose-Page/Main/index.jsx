import { useLocation, useNavigate } from "react-router-dom";
import { ButtonChoose } from "./Button";
import "./style.css";
import { useEffect, useState } from "react";

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

  const [status, setStatus] = useState({ statusDados: 0, page: "" });

  useEffect(() => {
    if (status.statusDados == 1) {
      navigate(status.page, { state: location.state });
    }
  });

  console.log(location.state);

  return (
    <main className="container-main-choose-page">
      <div className="text-container-choose-page">
        <span className="choose-text">Selecione uma opção para registrar</span>
      </div>
      <div className="buttons-container">
        <div
          onClick={() => {
            if (
              location.state != null ||
              location.state != "{}" ||
              location.state != "" ||
              location.state != undefined
            ) {
              setStatus({ statusDados: 1, page: "/dados-adicionais-driver" });
            }
          }}
        >
          <ButtonChoose props={propsButtonMotorista}></ButtonChoose>
        </div>
        <div
          onClick={() => {
            if (
              location.state != null ||
              location.state != "{}" ||
              location.state != "" ||
              location.state != undefined
            ) {
              setStatus({ statusDados: 1, page: "/dados-adicionais-user" });
            }
          }}
        >
          <ButtonChoose props={propsButtonCliente}></ButtonChoose>
        </div>
      </div>
    </main>
  );
};

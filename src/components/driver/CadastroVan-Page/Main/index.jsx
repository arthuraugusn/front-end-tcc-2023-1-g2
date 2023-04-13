import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { loadDriverByCpf } from "../../../../api/driver/loadDriverByCpf";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { registerVanDriver } from "../../../../api/driver/van/registerVanDriver";
import { ButtonSalvarVan } from "./Button";
import { FotoVan } from "./FotoVan";
import { InputContainerVan } from "./InputContainerVan";
import "./style.css";

export const MainDadosVan = () => {
  const fotoInfosVan = {
    folder: "vans-profile-picture",
  };

  const propsSalvarVan = {
    key: "button-save-van",
    label: "Salvar",
  };

  const locate = useLocation();

  let vanJson = {};

  const [responseError, setResponseError] = useState("");

  const [idDriver, setIdDriver] = useState(0);

  useEffect(() => {
    loadDriverByCpf(locate.state, setIdDriver);
  }, []);

  useEffect(() => {
    console.log(responseError);
  }, [responseError]);

  return (
    <>
      <main className="container-main-dados-van">
        <div className="container-foto-inputs-van">
          <div className="container-foto-perfil-van">
            <FotoVan props={fotoInfosVan} />
          </div>
          <div className="container-van-vagas-placa-modelo">
            <div
              onChange={(e) => {
                vanJson.quantidade_vagas = parseInt(e.target.value);
              }}
            >
              <InputContainerVan
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "Número de vagas:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div
              onChange={(e) => {
                vanJson.placa = e.target.value;
              }}
            >
              <InputContainerVan
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "Placa da van:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div>
              <InputContainerVan
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "Modelo da van:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            vanJson.foto = document.querySelector(".img-preview").id;
            vanJson.id_motorista = parseInt(idDriver);

            if (vanJson) {
              registerVanDriver(vanJson, setResponseError);
            }
          }}
          className="container-button-save-van"
        >
          <ButtonSalvarVan props={propsSalvarVan} />
        </div>
      </main>
    </>
  );
};

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

  let vanJson = {};

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
                vanJson.quantidade_vagas = e.target.value;
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
        <div className="container-button-save-van">
          <ButtonSalvarVan props={propsSalvarVan} />
        </div>
      </main>
    </>
  );
};

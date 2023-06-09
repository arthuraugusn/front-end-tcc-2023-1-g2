import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadDriverByCpf } from "../../../../api/driver/loadDriverByCpf";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { registerVanDriver } from "../../../../api/driver/van/registerVanDriver";
import { ButtonSalvarVan } from "./Button";
import { FotoVan } from "./FotoVan";
import { InputContainerVan } from "./InputContainerVan";
import "./style.css";
import Swal from "sweetalert2";
import { loadModelVan } from "../../../../api/driver/van/loadModels";
import { registerDriverClient } from "../../../../api/driver/registerUserClient";

export const MainDadosVan = () => {
  const propsSalvarVan = {
    key: "button-save-van",
    label: "Salvar",
  };

  const navigate = useNavigate();

  const locate = useLocation();

  const [van, setVan] = useState({});

  const [responseError, setResponseError] = useState("");

  const [responseErrorPostDriver, setResponseErrorPostDriver] = useState({
    status: 0,
  });

  const [idDriver, setIdDriver] = useState(0);

  const [statusInput, setStatusInput] = useState(true);

  const [response, setResponse] = useState("");

  const [modelsVan, setModels] = useState([]);

  useEffect(() => {
    loadModelVan(setModels);
  });

  useEffect(() => {
    loadDriverByCpf(locate.state, setIdDriver);
  }, []);

  useEffect(() => {
    if (van.status_finalizado === 1) {
      if (
        van.quantidade_vagas == undefined ||
        van.quantidade_vagas == null ||
        van.quantidade_vagas == "" ||
        van.placa == undefined ||
        van.placa == null ||
        van.placa == "" ||
        van.img == undefined ||
        van.img == null ||
        van.img == ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Você não preencheu os dados corretamente, tente de novo",
        }).then(() => {
          window.location.reload();
        });
      } else {
        if (van.id_motorista !== null || van.id_motorista !== undefined) {
          registerVanDriver(van, setResponseError);
        }
      }
    }
  }, [van]);

  useEffect(() => {
    if (responseError.status == 201) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Seu cadastro foi feito com sucesso",
      }).then(() => {
        navigate("/login");
      });
    }
  }, [responseError]);

  return (
    <>
      <main className="container-main-dados-van">
        <div className="container-foto-inputs-van">
          <div className="container-foto-perfil-van">
            <FotoVan
              props={{
                folder: "vans-profile-picture",
                setUrlImg: setVan,
              }}
            />
          </div>
          <div className="container-van-vagas-placa-modelo">
            <div
              onChange={(e) => {
                setVan({
                  quantidade_vagas: parseInt(e.target.value),
                  placa: van.placa,
                  img: van.img,
                  id_motorista: parseInt(idDriver),
                  id_modelo: van.id_modelo,
                });
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
                setVan({
                  quantidade_vagas: van.quantidade_vagas,
                  placa: e.target.value,
                  img: van.img,
                  id_motorista: parseInt(idDriver),
                  id_modelo: van.id_modelo,
                });
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
            <div className="input-container">
              <label className="placeholder">Modelo da Van:</label>
              <select
                name="filtros"
                className="selects"
                onChange={(e) => {
                  setVan({
                    quantidade_vagas: van.quantidade_vagas,
                    placa: van.placa,
                    img: van.img,
                    id_motorista: parseInt(idDriver),
                    id_modelo: parseInt(
                      e.currentTarget.childNodes[e.currentTarget.selectedIndex]
                        .id
                    ),
                  });
                }}
              >
                <option>Escolha o modelo da sua van</option>
                {modelsVan.map((elemento) => {
                  return (
                    <option key={elemento.id} id={elemento.id}>
                      {elemento.modelo}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setVan({
              quantidade_vagas: van.quantidade_vagas,
              placa: van.placa,
              img: van.img,
              id_motorista: parseInt(idDriver),
              id_modelo: van.id_modelo,
              status_finalizado: 1,
            });
          }}
          className="container-button-save-van"
        >
          <ButtonSalvarVan props={propsSalvarVan} />
        </div>
      </main>
    </>
  );
};

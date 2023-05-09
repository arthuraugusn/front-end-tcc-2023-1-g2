import { useEffect, useState } from "react";
import { loadModelVan } from "../../../../api/driver/van/loadModels";
import { ButtonSaveVan } from "./Button";
import "./style.css";
import { AdicionarFotoVan } from "./FotoVan";
import { InputsAdicionarVan } from "./Inputs";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerVanDriver } from "../../../../api/driver/van/registerVanDriver";

export const MainAdicionarVanPage = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [fotoVan, setFotoVan] = useState({
    img: "",
    statusImg: false,
  });

  const [van, setVan] = useState({
    placa: "",
    img: "",
    quantidade_vagas: 0,
    id_modelo: 0,
    id_motorista: 0,
    status_requisition: 0,
  });

  const [modelo, setModelos] = useState([
    {
      id: 0,
      modelo: "",
    },
  ]);

  const [responseError, setResponseError] = useState({});

  useEffect(() => {
    loadModelVan(setModelos);
  }, []);

  useEffect(() => {
    setVan({
      placa: van.placa,
      img: fotoVan.img,
      quantidade_vagas: van.quantidade_vagas,
      id_modelo: van.id_modelo,
      id_motorista: van.id_motorista,
    });
  }, [fotoVan]);

  useEffect(() => {
    if (van.status_requisition == 1) {
      if (
        van.img == undefined ||
        van.img == "" ||
        van.img == null ||
        van.quantidade_vagas == undefined ||
        van.quantidade_vagas == "" ||
        van.quantidade_vagas == null ||
        van.placa == undefined ||
        van.placa == "" ||
        van.placa == null ||
        van.id_modelo == undefined ||
        van.id_modelo == "" ||
        van.id_modelo == null ||
        van.id_motorista == undefined ||
        van.id_motorista == "" ||
        van.id_motorista == null
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Você não inseriu todas as informações para inserir sua van",
        });
      } else {
        registerVanDriver(van, setResponseError);
      }
    }
  }, [van.status_requisition]);

  useEffect(() => {
    if (responseError.status == 201) {
      navigate("/suas-vans");
    }
  }, [responseError]);

  return (
    <main className="container-main-sua-van">
      <div className="container-title-sua-van">
        <h1>Sua Van</h1>
      </div>
      <div className="picture-van">
        <AdicionarFotoVan
          props={{
            folder: "vans-profile-picture",
            setUrlImg: setFotoVan,
          }}
        />
      </div>
      <div className="inputs-infos-container-sua-van salvar-van-input">
        <div
          onChange={(e) => {
            setVan({
              placa: van.placa,
              img: van.img,
              quantidade_vagas: parseInt(e.target.value),
              id_modelo: van.id_modelo,
              id_motorista: van.id_motorista,
            });
          }}
        >
          <InputsAdicionarVan
            props={{
              nameInput: "Número de vagas:",
              classNameLabel: "placeholder",
              classNameInput: "inputs-more-infos",
            }}
          />
        </div>
        <div
          onChange={(e) => {
            setVan({
              placa: e.target.value,
              img: van.img,
              quantidade_vagas: van.quantidade_vagas,
              id_modelo: van.id_modelo,
              id_motorista: van.id_motorista,
            });
          }}
        >
          <InputsAdicionarVan
            props={{
              nameInput: "Placa da van:",
              classNameLabel: "placeholder",
              classNameInput: "inputs-more-infos",
            }}
          />
        </div>
      </div>
      <div className="container-inputs-button-save-button">
        <div className="inputs-for-van">
          <div className="dropdown-content">
            <label className="placeholder">Modelo da van:</label>
            <select
              name="modelos"
              className="selects"
              onChange={(e) => {
                setVan({
                  placa: van.placa,
                  img: van.img,
                  quantidade_vagas: van.quantidade_vagas,
                  id_modelo: parseInt(
                    e.currentTarget.childNodes[e.currentTarget.selectedIndex].id
                  ),
                  id_motorista: van.id_motorista,
                });
              }}
            >
              <option>Escolha seu modelo</option>
              {modelo.map((e) => {
                return (
                  <option id={e.id} key={e.id}>
                    {e.modelo}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div
          className="button-save-van"
          onClick={() => {
            setVan({
              placa: van.placa,
              img: fotoVan.img,
              quantidade_vagas: van.quantidade_vagas,
              id_modelo: van.id_modelo,
              id_motorista: location.state.id_motorista,
              status_requisition: 1,
            });
          }}
        >
          <ButtonSaveVan
            props={{
              key: "van",
              label: "Salvar",
            }}
          />
        </div>
      </div>
    </main>
  );
};

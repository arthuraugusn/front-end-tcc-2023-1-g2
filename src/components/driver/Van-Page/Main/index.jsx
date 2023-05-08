import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { loadModeloById } from "../../../../api/driver/van/loadModeloById";
import { loadModelVan } from "../../../../api/driver/van/loadModels";
import { loadVanById } from "../../../../api/driver/van/loadVanById";
import { ButtonUpdateVan } from "./Button";
import { FotoPerfilVan } from "./FotoVanPage";
import { InputSuaVanPage } from "./Inputs";
import "./style.css";

export const MainSuaVanPage = () => {
  const location = useLocation();

  const [van, setVan] = useState({
    quantidade_vagas: "",
    placa: "",
  });

  const [driver, setDriver] = useState({
    id_preco: {
      faixa_preco: "",
    },
  });

  const [status, setStatus] = useState({
    dropdown: "none",
    input: "true",
  });

  const [modeloVan, setModeloVan] = useState({ modelo: "" });

  const [statusFoto, setStatusFoto] = useState({
    t: false,
  });

  const [modelos, setModelos] = useState([
    {
      id: 0,
      modelo: "",
    },
  ]);

  const [foto, setFoto] = useState("");

  const [updateVan, setUpdateVan] = useState({});

  useEffect(() => {
    loadVanById(location.state.id_van, setVan);
    loadDriverById(location.state.id_motorista, setDriver);
    loadModelVan(setModelos);
  }, []);

  useEffect(() => {
    if (van.id_modelo != undefined) {
      loadModeloById(van.id_modelo, setModeloVan);
    }
    if (van.foto != undefined) {
      setFoto(van.foto);
    }

    if (statusFoto.t == true) {
      setFoto(statusFoto.img);
    }
  }, [van, statusFoto]);

  return (
    <main className="container-main-sua-van">
      <div className="container-title-sua-van">
        <h1>Sua Van</h1>
      </div>
      <div className="picture-van">
        <FotoPerfilVan props={{ foto: foto, setStatusFoto: setStatusFoto }} />
      </div>
      <div className="inputs-container-infos-sua-van">
        <div>
          <div
            className="inputs-for-van"
            onChange={(e) => {
              setUpdateVan({
                foto: updateVan.foto,
                quantidade_vagas: e.target.value,
                placa: updateVan.placa,
                id_modelo: updateVan.id_modelo,
              });
            }}
          >
            <InputSuaVanPage
              props={{
                placeholder: van.quantidade_vagas,
                nameInput: "Número de vagas:",
                classNameLabel: "placeholder",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
          <div
            className="inputs-for-van"
            onChange={(e) => {
              setUpdateVan({
                foto: updateVan.foto,
                quantidade_vagas: updateVan.quantidade_vagas,
                placa: e.target.value,
                id_modelo: updateVan.id_modelo,
              });
            }}
          >
            <InputSuaVanPage
              props={{
                placeholder: van.placa,
                nameInput: "Placa da van:",
                classNameLabel: "placeholder",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
        </div>
        <div>
          <div className="inputs-for-van">
            <div
              className={status.input}
              onClick={() => {
                setStatus({
                  dropdown: "true",
                  input: "none",
                });
              }}
              onChange={(e) => {
                setUpdateVan({
                  foto: updateVan.foto,
                  quantidade_vagas: updateVan.quantidade_vagas,
                  placa: updateVan.placa,
                  id_modelo:
                    e.currentTarget.childNodes[e.currentTarget.selectedIndex]
                      .id,
                });
              }}
            >
              <InputSuaVanPage
                props={{
                  status: true,
                  placeholder: modeloVan.modelo,
                  nameInput: "Modelo da van:",
                  classNameLabel: "placeholder",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>

            <div className={`dropdown-content ${status.dropdown}`}>
              <label className="placeholder">Modelo da van:</label>

              <select name="filtro" className="selects">
                <option>Escolha seu modelo</option>
                {modelos.map((e) => {
                  return (
                    <option id={e.id} key={e.id}>
                      {e.modelo}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="inputs-for-van">
            <InputSuaVanPage
              props={{
                status: true,
                placeholder: driver.id_preco.faixa_preco,
                nameInput: "Valor de transporte:",
                classNameLabel: "placeholder",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
        </div>
      </div>
      <div onClick={() => {}}>
        <ButtonUpdateVan
          props={{
            key: "van",
            label: "Atualizar",
          }}
        />
      </div>
    </main>
  );
};

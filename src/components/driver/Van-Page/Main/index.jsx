import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { loadModeloById } from "../../../../api/driver/van/loadModeloById";
import { loadModelVan } from "../../../../api/driver/van/loadModels";
import { loadVanById } from "../../../../api/driver/van/loadVanById";
import { updateVan } from "../../../../api/driver/van/updateVan";
import { ButtonUpdateVan } from "./Button";
import { FotoPerfilVan } from "./FotoVanPage";
import { InputSuaVanPage } from "./Inputs";
import "./style.css";

export const MainSuaVanPage = () => {
  const location = useLocation();

  const navigate = useNavigate();

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

  const [updateVanJson, setUpdateVan] = useState({
    status_requisition: 0,
    id_modelo: 0,
    id_motorista: 0,
    placa: "",
    foto: "",
    quantidade_vagas: 0,
  });

  const [responseError, setResponseError] = useState({
    status: 0,
    data: "",
  });

  useEffect(() => {
    loadVanById(localStorage.getItem("id_van"), setVan);
    loadDriverById(localStorage.getItem("id"), setDriver);
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

  useEffect(() => {
    setUpdateVan({
      foto: foto,
      quantidade_vagas: updateVanJson.quantidade_vagas,
      placa: updateVanJson.placa,
      id_modelo: updateVanJson.id_modelo,
      id_motorista: updateVanJson.id_motorista,
    });
  }, [foto]);

  useEffect(() => {
    if (updateVanJson.status_requisition == 1) {
      if (
        updateVanJson.foto == undefined ||
        updateVanJson.foto == "" ||
        updateVanJson.foto == null ||
        updateVanJson.placa == undefined ||
        updateVanJson.placa == "" ||
        updateVanJson.placa == null ||
        updateVanJson.id_modelo == undefined ||
        updateVanJson.id_modelo == "" ||
        updateVanJson.id_modelo == null ||
        updateVanJson.id_motorista == undefined ||
        updateVanJson.id_motorista == "" ||
        updateVanJson.id_motorista == null ||
        updateVanJson.quantidade_vagas == undefined ||
        updateVanJson.quantidade_vagas == "" ||
        updateVanJson.quantidade_vagas == null
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Você não inseriu todas as informações para atualizar sua van",
        });
      } else {
        updateVan(
          localStorage.getItem("id_van"),
          updateVanJson,
          setResponseError
        );
      }
    }
  }, [updateVanJson]);

  useEffect(() => {
    if (responseError.status == 201) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Sua van foi atualizada com sucesso",
      }).then(() => {
        navigate("/suas-vans");
      });
    }
  }, [responseError]);

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
                foto: updateVanJson.foto,
                quantidade_vagas: parseInt(e.target.value),
                placa: updateVanJson.placa,
                id_modelo: updateVanJson.id_modelo,
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
                foto: updateVanJson.foto,
                quantidade_vagas: updateVanJson.quantidade_vagas,
                placa: e.target.value,
                id_modelo: updateVanJson.id_modelo,
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

              <select
                name="filtro"
                className="selects"
                onChange={(e) => {
                  setUpdateVan({
                    foto: updateVanJson.foto,
                    quantidade_vagas: updateVanJson.quantidade_vagas,
                    placa: updateVanJson.placa,
                    id_modelo:
                      e.currentTarget.childNodes[e.currentTarget.selectedIndex]
                        .id,
                  });
                }}
              >
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
          <div className="inputs-for-van faixa_preco_van">
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
      <div
        className="button-update-van"
        onClick={() => {
          setUpdateVan({
            foto: updateVanJson.foto,
            quantidade_vagas: updateVanJson.quantidade_vagas,
            placa: updateVanJson.placa,
            id_modelo: updateVanJson.id_modelo,
            status_requisition: 1,
            id_motorista: parseInt(localStorage.getItem("id")),
          });
        }}
      >
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

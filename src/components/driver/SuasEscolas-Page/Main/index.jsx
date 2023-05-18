import { useEffect, useState } from "react";
import { InputContainerEscola } from "./Input";
import "./style.css";
import { ButtonSalvarEscola } from "./Button";
import { registerSchool } from "../../../../api/driver/registerSchool";
import { registerSchoolDriver } from "../../../../api/driver/registerSchoolDriver";
import { loadSchoolsDrivers } from "../../../../api/client/loadSchools";
import { loadSchoolsDriverById } from "../../../../api/driver/loadSchoolsDriverById";
import Swal from "sweetalert2";
import { ListOfSchoolsDriver } from "./P";
import { CheckBox } from "@mui/icons-material";
import { ModalSuasEscolasPage } from "./Modal";
import { loadDriverContract } from "../../../../api/driver/loadDriverContract";
import { deleteSchoolDriverById } from "../../../../api/driver/deleteSchoolDriverById";

export const MainSuasEscolas = () => {
  const [nomeEscola, setNomeEscola] = useState({
    nome: "",
    status_click: 0,
  });

  const [responseError, setResponseError] = useState({
    status: 0,
  });

  const [resposnseErrorSchool, setResponseErrorSchool] = useState({});

  const [responseErrorGet, setResponseErrorGet] = useState({
    response: "",
    code: 0,
  });

  const [schoolDriver, setSchoolDriver] = useState({
    schools: [
      {
        nome_escola: "",
      },
    ],
  });

  const [visibilityOnDisable, setVisibilityOnDisable] = useState({
    status: "",
  });

  const [idEscolaMotorista, setIdEscolaMotorista] = useState("");

  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });

  const [responseErrorSchoolDelete, setResponseErrorSchoolDelete] = useState({
    status: 0,
  });

  useEffect(() => {
    if (idEscolaMotorista !== "") {
    }
  }, [idEscolaMotorista]);

  useEffect(() => {
    loadSchoolsDriverById(localStorage.getItem("id"), setResponseErrorGet);
  }, []);

  useEffect(() => {
    if (responseErrorGet.code === 404) {
    } else if (responseErrorGet.code === 200) {
      setSchoolDriver(responseErrorGet.response);
    }
  }, [responseErrorGet]);

  useEffect(() => {
    if (nomeEscola.status_click === 1) {
      if (nomeEscola.nome !== "") {
        registerSchool(nomeEscola.nome, setResponseError);
      }
    } else if (nomeEscola.status_click === 2) {
      if (idEscolaMotorista !== "") {
        if (openCloseModal.value.toLowerCase() === "sim") {
          deleteSchoolDriverById(
            idEscolaMotorista,
            localStorage.getItem("id"),
            setResponseErrorSchoolDelete
          );
        }
      }
    }
  }, [nomeEscola, openCloseModal.value]);

  useEffect(() => {
    if (responseError.status === 201) {
    } else if (responseError.status === 401) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Esta escola foi associada ao seu perfil",
      }).then((response) => {
        registerSchoolDriver(
          responseError.data.id,
          localStorage.getItem("id"),
          setResponseErrorSchool
        );
        window.location.reload();
      });
    }

    if (responseErrorSchoolDelete.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Esta escola foi excluída do seu perfil",
      }).then((response) => {
        window.location.reload();
      });
    }
  }, [responseError, responseErrorSchoolDelete]);

  return (
    <>
      <main className="container-main-suas-escolas">
        <div className="container-h1-suas-escolas">
          <h1>Suas Escolas</h1>
        </div>
        <div className="container-suas-escolas">
          <div className={`container-nome-escolas`}>
            <ListOfSchoolsDriver
              props={{
                responseErrorGet: responseErrorGet,
                schoolDriver: schoolDriver,
                setIdEscolaMotorista: setIdEscolaMotorista,
              }}
            />
          </div>
          <div
            className="container-input-escola"
            onChange={(e) => {
              setNomeEscola({
                nome: e.target.value,
              });
            }}
          >
            <InputContainerEscola
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nome da Escola:",
                classNameInput: "input-login",
              }}
            />
          </div>
        </div>
        <div className="container-buttons-save-escola">
          <div
            onClick={() => {
              setNomeEscola({
                nome: nomeEscola.nome,
                status_click: 1,
              });
            }}
          >
            <ButtonSalvarEscola
              props={{
                key: "button-form",
                label: "Salvar",
              }}
            />
          </div>
          <div
            onClick={() => {
              setNomeEscola({
                status_click: 2,
              });
              setOpenCloseModal({ status: true, value: openCloseModal.value });
            }}
          >
            <ButtonSalvarEscola
              props={{
                key: "button-form",
                label: "Excluir",
              }}
            />
          </div>
        </div>
        <ModalSuasEscolasPage
          props={{
            openCloseModal: openCloseModal,
            setOpenCloseModal: setOpenCloseModal,
            message: "Você deseja se desvincular com essa escola ?",
          }}
        />
      </main>
    </>
  );
};

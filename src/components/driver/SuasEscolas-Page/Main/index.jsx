import { useEffect, useState } from "react";
import { InputContainerEscola } from "./Input";
import "./style.css";
import { ButtonSalvarEscola } from "./Button";
import { registerSchool } from "../../../../api/driver/registerSchool";
import { registerSchoolDriver } from "../../../../api/driver/registerSchoolDriver";
import { loadSchoolsDrivers } from "../../../../api/client/loadSchools";
import { loadSchoolsDriverById } from "../../../../api/driver/loadSchoolsDriverById";
import Swal from "sweetalert2";

export const MainSuasEscolas = () => {
  const [nomeEscola, setNomeEscola] = useState({
    nome: "",
    status_click: 0,
  });

  const [responseError, setResponseError] = useState({
    status: 0,
  });

  const [resposnseErrorSchool, setResponseErrorSchool] = useState({});

  const [schoolDriver, setSchoolDriver] = useState({
    data: {
      schools: [
        {
          nome_escola: "",
        },
      ],
    },
  });

  useEffect(() => {
    loadSchoolsDriverById(localStorage.getItem("id"), setSchoolDriver);
  }, []);

  useEffect(() => {
    if (nomeEscola.status_click === 1) {
      if (nomeEscola.nome !== "") {
        registerSchool(nomeEscola.nome, setResponseError);
      }
    }
  }, [nomeEscola]);

  useEffect(() => {
    console.log(responseError);
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
  }, [responseError]);

  return (
    <>
      <main className="container-main-suas-escolas">
        <div className="container-h1-suas-escolas">
          <h1>Suas Escolas</h1>
        </div>
        <div className="container-suas-escolas">
          <div className="container-nome-escolas">
            {schoolDriver.data.schools.map((e) => {
              return (
                <>
                  <p>{e.nome_escola}</p>
                </>
              );
            })}
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
        <div
          className="container-buttons-save-escola"
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
      </main>
    </>
  );
};

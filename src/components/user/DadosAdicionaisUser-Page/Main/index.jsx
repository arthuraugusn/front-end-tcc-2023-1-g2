import { useEffect, useState } from "react";
import { registerUserClient } from "../../../../api/client/registerUserClient";
import { FormFirstInfos } from "./FormFirstInfos";
import { FotoPerfilRegistro } from "./FotoPerfil";
import "./style.css";
import Swal from "sweetalert2";

export const MainDadosAdicionaisUser = () => {
  const [user, setUserInfos] = useState({});

  const [responseError, setResponseError] = useState("");

  useEffect(() => {
    if (user.status_finalizado === 1) {
      if (
        user.rg === undefined ||
        user.rg === "" ||
        user.rg === null ||
        user.cpf === undefined ||
        user.cpf === "" ||
        user.cpf === null ||
        user.data_nascimento === undefined ||
        user.data_nascimento === "" ||
        user.data_nascimento === null ||
        user.email === undefined ||
        user.email === "" ||
        user.email === null ||
        user.senha === undefined ||
        user.senha === "" ||
        user.senha === null ||
        user.telefone === undefined ||
        user.telefone === "" ||
        user.telefone === null ||
        user.numero === undefined ||
        user.numero === "" ||
        user.numero === null
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Você não preencheu os dados corretamente, tente de novo",
        }).then(() => {
          window.location.reload();
        });
      } else {
        registerUserClient(user, setResponseError);
      }
    }
  }, [user]);

  return (
    <>
      <main className="container-main-da-user">
        <form className="container-form-register">
          <FotoPerfilRegistro
            props={{
              folder: "users-profile-picture",
              setUrlImg: setUserInfos,
            }}
          ></FotoPerfilRegistro>
          <FormFirstInfos
            props={{
              setUser: setUserInfos,
              user: user,
              setResponseError: setResponseError,
              responseError: responseError,
            }}
          ></FormFirstInfos>
        </form>
      </main>
    </>
  );
};

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { registerUserClient } from "../../../../api/client/registerUserClient";
import { FormFirstInfos } from "./FormFirstInfos";
import { FotoPerfilRegistro } from "./FotoPerfil";
import "./style.css";

export const MainDadosAdicionaisUser = () => {
  const [user, setUserInfos] = useState({});

  const [responseError, setResponseError] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (user.status_finalizado == 1) {
      registerUserClient(user, setResponseError);
    }
  }, [user]);

  return (
    <>
      <main className="container-main-da-user">
        <form className="container-form-register">
          <FotoPerfilRegistro
            props={{ folder: "users-profile-picture", setUrlImg: setUserInfos }}
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

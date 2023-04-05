import { FormFirstInfos } from "./FormFirstInfos";
import { FotoPerfilRegistro } from "./FotoPerfil";
import "./style.css";

export const MainDadosAdicionaisUser = () => {
  return (
    <>
      <main className="container-main-da-user">
        <form className="container-form-register">
          <FotoPerfilRegistro></FotoPerfilRegistro>
          <FormFirstInfos></FormFirstInfos>
        </form>
      </main>
    </>
  );
};

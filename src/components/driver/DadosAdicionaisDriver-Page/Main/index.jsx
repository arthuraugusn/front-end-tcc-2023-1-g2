import { FormsInfosDriver } from "./FormsInfosDriver";
import { FotoPerfilRegistroDriver } from "./FotoPerfil";
import "./style.css";

export const MainDadosAdicionaisDriver = () => {
  return (
    <main className="container-main-driver">
      <FotoPerfilRegistroDriver
        props={{ folder: "drivers-profile-picture" }}
      ></FotoPerfilRegistroDriver>
      <FormsInfosDriver></FormsInfosDriver>
    </main>
  );
};

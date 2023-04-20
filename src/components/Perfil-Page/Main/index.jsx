import { ButtonsSaveDeletePerfil } from "./Button";
import "./style.css";

export const MainPerfilPage = () => {
  return (
    <main className="container-main-perfil">
      <div className="container-h1-perfil">
        <h1>Perfil</h1>
      </div>
      <div className="container-itens-perfil"></div>
      <div className="container-buttons-perfil">
        <ButtonsSaveDeletePerfil
          props={{ key: "button-form", label: "Salvar" }}
        />
        <ButtonsSaveDeletePerfil
          props={{ key: "button-form", label: "Excluir" }}
        />
      </div>
    </main>
  );
};

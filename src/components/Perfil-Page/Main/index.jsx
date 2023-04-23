import { ButtonsSaveDeletePerfil } from "./Button";
import { FotoPerfilPage } from "./Inputs/FotoPerfil";
import { InputInfosPerfil } from "./Inputs/InputInfos";
import "./style.css";

export const MainPerfilPage = () => {
  return (
    <main className="container-main-perfil">
      <div className="container-h1-perfil">
        <h1>Perfil</h1>
      </div>
      <div className="container-itens-perfil">
        <div className="container-picture-perfil">
          <FotoPerfilPage />
        </div>
        <div className="container-inputs-perfil-page">
          <div className="container-inputs-perfil-first">
            <div className="inputs-perfil">
              <InputInfosPerfil
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "RG:",
                  classNameInput: "inputs-more-infos",
                }}
              />{" "}
              <InputInfosPerfil
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "CPF:",
                  classNameInput: "inputs-more-infos",
                }}
              />{" "}
              <InputInfosPerfil
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "NOME:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div className="inputs-perfil">
              <InputInfosPerfil
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "Data de nascimento:",
                  classNameInput: "inputs-more-infos",
                }}
              />
              <InputInfosPerfil
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "Telefone:",
                  classNameInput: "inputs-more-infos",
                }}
              />
              <InputInfosPerfil
                props={{
                  classNameLabel: "placeholder",
                  nameInput: "CEP:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
          </div>
          <div className="input-perfil-email">
            <InputInfosPerfil
              props={{
                classNameLabel: "placeholder",
                nameInput: "Email:",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
          <div className="container-inputs-perfil-passwords">
            <InputInfosPerfil
              props={{
                classNameLabel: "placeholder",
                nameInput: "Senha atual:",
                classNameInput: "inputs-more-infos",
              }}
            />
            <InputInfosPerfil
              props={{
                classNameLabel: "placeholder",
                nameInput: "Nova senha:",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
        </div>
      </div>
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

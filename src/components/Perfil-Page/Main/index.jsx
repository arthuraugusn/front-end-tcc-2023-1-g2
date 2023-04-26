import { reload } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteUser } from "../../../api/client/deleteUser";
import { loadUserbyId } from "../../../api/client/loadUserbyId";
import { updateUser } from "../../../api/client/updateUser";
import { loadDriverById } from "../../../api/driver/loadDriverById";
import { ButtonsSaveDeletePerfil } from "./Button";
import { FotoPerfilPage } from "./Inputs/FotoPerfil";
import { InputInfosPerfil } from "./Inputs/InputInfos";
import "./style.css";

export const MainPerfilPage = () => {
  const statusUserDriver = localStorage.getItem("status_user_driver");

  const [perfil, setPerfil] = useState({});

  const [user, setUser] = useState({});

  const [statusCode, setStatusCode] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");

    if (statusUserDriver == 2) {
      loadUserbyId(id, setPerfil);
    }
    if (statusUserDriver == 1) {
      loadDriverById(id, setPerfil);
    }
  }, [perfil]);

  useEffect(() => {
    console.log(statusCode);
    if (statusCode == 200) {
      navigate("/");
      localStorage.clear();
    } else if (statusCode == 201) {
      alert("Seu perfil foi atualizado com sucesso");
      window.location.reload();
    }
  }, [statusCode]);

  return (
    <main className="container-main-perfil">
      <div className="container-h1-perfil">
        <h1>Perfil</h1>
      </div>
      <div className="container-itens-perfil">
        <div className="container-picture-perfil">
          <FotoPerfilPage />
          <img src={perfil.foto} alt="" />
        </div>
        <div className="container-inputs-perfil-page">
          <div className="container-inputs-perfil-first">
            <div className="inputs-perfil">
              <div
                onChange={(e) => {
                  setUser({
                    foto: perfil.foto,
                    rg: e.target.value,
                    cpf: user.cpf,
                    nome: user.nome,
                    data_nascimento: user.data_nascimento,
                    telefone: user.telefone,
                    cep: user.cep,
                    email: user.email,
                    senha_atual: user.senha_atual,
                    nova_senha: user.nova_senha,
                  });
                }}
              >
                <InputInfosPerfil
                  props={{
                    placeholder: perfil.rg,
                    classNameLabel: "placeholder",
                    nameInput: "RG:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
              <div
                onChange={(e) => {
                  setUser({
                    foto: perfil.foto,
                    rg: user.rg,
                    cpf: e.target.value,
                    nome: user.nome,
                    data_nascimento: user.data_nascimento,
                    telefone: user.telefone,
                    cep: user.cep,
                    email: user.email,
                    senha_atual: user.senha_atual,
                    nova_senha: user.nova_senha,
                  });
                }}
              >
                <InputInfosPerfil
                  props={{
                    placeholder: perfil.cpf,
                    classNameLabel: "placeholder",
                    nameInput: "CPF:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
              <div
                onChange={(e) => {
                  setUser({
                    foto: perfil.foto,
                    rg: user.rg,
                    cpf: user.cpf,
                    nome: e.target.value,
                    data_nascimento: user.data_nascimento,
                    telefone: user.telefone,
                    cep: user.cep,
                    email: user.email,
                    senha_atual: user.senha_atual,
                    nova_senha: user.nova_senha,
                  });
                }}
              >
                <InputInfosPerfil
                  props={{
                    placeholder: perfil.nome,
                    classNameLabel: "placeholder",
                    nameInput: "NOME:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
            </div>
            <div className="inputs-perfil">
              <div
                onChange={(e) => {
                  setUser({
                    foto: perfil.foto,
                    rg: user.rg,
                    cpf: user.cpf,
                    nome: user.nome,
                    data_nascimento: e.target.value,
                    telefone: user.telefone,
                    cep: user.cep,
                    email: user.email,
                    senha_atual: user.senha_atual,
                    nova_senha: user.nova_senha,
                  });
                }}
              >
                <InputInfosPerfil
                  props={{
                    placeholder: perfil.data_nascimento,
                    classNameLabel: "placeholder",
                    nameInput: "Data de nascimento:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
              <div
                onChange={(e) => {
                  setUser({
                    foto: perfil.foto,
                    rg: user.rg,
                    cpf: user.cpf,
                    nome: user.nome,
                    data_nascimento: user.data_nascimento,
                    telefone: e.target.value,
                    cep: user.cep,
                    email: user.email,
                    senha_atual: user.senha_atual,
                    nova_senha: user.nova_senha,
                  });
                }}
              >
                <InputInfosPerfil
                  props={{
                    placeholder: perfil.telefone,
                    classNameLabel: "placeholder",
                    nameInput: "Telefone:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
              <div
                onChange={(e) => {
                  setUser({
                    foto: perfil.foto,
                    rg: user.rg,
                    cpf: user.cpf,
                    nome: user.nome,
                    data_nascimento: user.data_nascimento,
                    telefone: user.telefone,
                    cep: e.target.value,
                    email: user.email,
                    senha_atual: user.senha_atual,
                    nova_senha: user.nova_senha,
                  });
                }}
              >
                <InputInfosPerfil
                  props={{
                    placeholder: perfil.cep,
                    classNameLabel: "placeholder",
                    nameInput: "CEP:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            onChange={(e) => {
              setUser({
                foto: perfil.foto,
                rg: user.rg,
                cpf: user.cpf,
                nome: user.nome,
                data_nascimento: user.data_nascimento,
                telefone: user.telefone,
                cep: user.cep,
                email: e.target.value,
                senha_atual: user.senha_atual,
                nova_senha: user.nova_senha,
              });
            }}
            className="input-perfil-email"
          >
            <InputInfosPerfil
              props={{
                placeholder: perfil.email,
                classNameLabel: "placeholder",
                nameInput: "Email:",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
          <div className="container-inputs-perfil-passwords">
            <div
              onChange={(e) => {
                setUser({
                  foto: perfil.foto,
                  rg: user.rg,
                  cpf: user.cpf,
                  nome: user.nome,
                  data_nascimento: user.data_nascimento,
                  telefone: user.telefone,
                  cep: user.cep,
                  email: user.email,
                  senha_atual: e.target.value,
                  nova_senha: user.nova_senha,
                });
              }}
            >
              <InputInfosPerfil
                props={{
                  placeholder: "********",
                  classNameLabel: "placeholder",
                  nameInput: "Senha atual:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
            <div
              onChange={(e) => {
                setUser({
                  foto: perfil.foto,
                  rg: user.rg,
                  cpf: user.cpf,
                  nome: user.nome,
                  data_nascimento: user.data_nascimento,
                  telefone: user.telefone,
                  cep: user.cep,
                  email: user.email,
                  senha_atual: user.senha_atual,
                  nova_senha: e.target.value,
                });
              }}
            >
              <InputInfosPerfil
                props={{
                  placeholder: "********",
                  classNameLabel: "placeholder",
                  nameInput: "Nova senha:",
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-buttons-perfil">
        <div
          onClick={() => {
            updateUser(user, perfil.id, setStatusCode);
          }}
        >
          <ButtonsSaveDeletePerfil
            props={{ key: "button-form", label: "Salvar" }}
          />
        </div>
        <div
          onClick={() => {
            if (statusUserDriver == 2) {
              deleteUser(perfil, setStatusCode);
            }
            if (statusUserDriver == 1) {
            }
          }}
        >
          <ButtonsSaveDeletePerfil
            props={{ key: "button-form", label: "Excluir" }}
          />
        </div>
      </div>
    </main>
  );
};

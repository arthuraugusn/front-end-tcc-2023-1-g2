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

  const [data, setData] = useState({ ano: "", mes: "", dia: "" });

  const [perfilDriverUser, setPerfilDriverUser] = useState({
    status_motorista: "none",
    status_responsavel: "true",
  });

  const [inputValueInicioCarreira, setInputValueInicioCarreira] = useState({});

  const [inputValueDataNascimento, setInputValueDataNascimento] = useState({});

  const [infosInput, setInfosInput] = useState({});

  const [userEdit, setUserEdit] = useState({});

  const [statusCode, setStatusCode] = useState(0);

  const [responseError, setResponseError] = useState({});

  const [cepCnhValue, setCepCnhValue] = useState({});

  const [justifyContent, setJustifyContent] = useState("");

  const id = localStorage.getItem("id");

  const navigate = useNavigate();

  useEffect(() => {
    if (statusUserDriver == 2) {
      setJustifyContent("center");
      loadUserbyId(id, setResponseError);
    } else if (statusUserDriver == 1) {
      setJustifyContent("space-around");
      loadDriverById(id, setResponseError);
    }
  }, []);

  useEffect(() => {
    if (responseError) {
      setPerfil(responseError);
    }
  }, [responseError]);

  useEffect(() => {
    if (perfil.data_nascimento != undefined) {
      setInputValueDataNascimento({
        status: true,
        type: "text",
        placeholder: perfil.data_nascimento,
      });
    }

    if (perfil.inicio_carreira != undefined) {
      setInputValueInicioCarreira({
        status: true,
        type: "text",
        placeholder: perfil.inicio_carreira,
      });
    }

    if (statusUserDriver == 2) {
      setInfosInput({
        cepCnhValue: perfil.cep,
        name: "CEP:",
        status_visibility: "none",
      });
    } else if (statusUserDriver == 1) {
      setInfosInput({
        cepCnhValue: perfil.cnh,
        name: "CNH:",
        status_visibility: "true",
      });
    }
  }, [perfil]);

  useEffect(() => {
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
                  if (statusUserDriver == 2) {
                    setUserEdit({
                      foto: perfil.foto,
                      rg: e.target.value,
                      cpf: userEdit.cpf,
                      nome: userEdit.nome,
                      data_nascimento: userEdit.data_nascimento,
                      telefone: userEdit.telefone,
                      cep: userEdit.cep,
                      email: userEdit.email,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                    });
                  } else if (statusUserDriver == 1) {
                    setUserEdit({
                      email: userEdit.email,
                      nome: userEdit.nome,
                      rg: e.target.value,
                      cpf: userEdit.cpf,
                      avaliacao: perfil.avaliacao,
                      cnh: userEdit.cnh,
                      data_nascimento: userEdit.data_nascimento,
                      descricao: userEdit.descricao,
                      foto: userEdit.foto,
                      inicio_carreira: userEdit.inicio_carreira,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                      status_motorista: 1,
                      telefone: userEdit.telefone,
                    });
                  }
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
                  if (statusUserDriver == 2) {
                    setUserEdit({
                      foto: perfil.foto,
                      rg: userEdit.rg,
                      cpf: e.target.value,
                      nome: userEdit.nome,
                      data_nascimento: userEdit.data_nascimento,
                      telefone: userEdit.telefone,
                      cep: userEdit.cep,
                      email: userEdit.email,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                    });
                  } else if (statusUserDriver == 1) {
                    setUserEdit({
                      email: userEdit.email,
                      nome: userEdit.nome,
                      rg: userEdit.rg,
                      cpf: e.target.value,
                      avaliacao: perfil.avaliacao,
                      cnh: userEdit.cnh,
                      data_nascimento: userEdit.data_nascimento,
                      descricao: userEdit.descricao,
                      foto: userEdit.foto,
                      inicio_carreira: userEdit.inicio_carreira,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                      status_motorista: 1,
                      telefone: userEdit.telefone,
                    });
                  }
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
                  if (statusUserDriver == 2) {
                    setUserEdit({
                      foto: perfil.foto,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      nome: e.target.value,
                      data_nascimento: userEdit.data_nascimento,
                      telefone: userEdit.telefone,
                      cep: userEdit.cep,
                      email: userEdit.email,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                    });
                  } else if (statusUserDriver == 1) {
                    setUserEdit({
                      email: userEdit.email,
                      nome: e.target.value,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      avaliacao: perfil.avaliacao,
                      cnh: userEdit.cnh,
                      data_nascimento: userEdit.data_nascimento,
                      descricao: userEdit.descricao,
                      foto: userEdit.foto,
                      inicio_carreira: userEdit.inicio_carreira,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                      status_motorista: 1,
                      telefone: userEdit.telefone,
                    });
                  }
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
                onClick={() => {
                  setInputValueDataNascimento({
                    status: false,
                    data: "",
                    type: "date",
                  });
                }}
                onChange={(e) => {
                  if (statusUserDriver == 2) {
                    setUserEdit({
                      foto: perfil.foto,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      nome: userEdit.nome,
                      data_nascimento: e.target.value,
                      telefone: userEdit.telefone,
                      cep: userEdit.cep,
                      email: userEdit.email,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                    });
                  } else if (statusUserDriver == 1) {
                    setUserEdit({
                      email: userEdit.email,
                      nome: userEdit.nome,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      avaliacao: perfil.avaliacao,
                      cnh: userEdit.cnh,
                      data_nascimento: e.target.value,
                      descricao: userEdit.descricao,
                      foto: userEdit.foto,
                      inicio_carreira: userEdit.inicio_carreira,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                      status_motorista: 1,
                      telefone: userEdit.telefone,
                    });
                  }
                }}
              >
                <InputInfosPerfil
                  props={{
                    status: inputValueDataNascimento.status,
                    type: inputValueDataNascimento.type,
                    placeholder: inputValueDataNascimento.placeholder,
                    classNameLabel: "placeholder",
                    nameInput: "Data de nascimento:",
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
              <div
                onChange={(e) => {
                  if (statusUserDriver == 2) {
                    setUserEdit({
                      foto: perfil.foto,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      nome: userEdit.nome,
                      data_nascimento: userEdit.data_nascimento,
                      telefone: e.target.value,
                      cep: userEdit.cep,
                      email: userEdit.email,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                    });
                  } else if (statusUserDriver == 1) {
                    setUserEdit({
                      email: userEdit.email,
                      nome: userEdit.nome,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      avaliacao: perfil.avaliacao,
                      cnh: userEdit.cnh,
                      data_nascimento: userEdit.data_nascimento,
                      descricao: userEdit.descricao,
                      foto: userEdit.foto,
                      inicio_carreira: userEdit.inicio_carreira,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                      status_motorista: 1,
                      telefone: e.target.value,
                    });
                  }
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
                  if (statusUserDriver == 2) {
                    setUserEdit({
                      foto: perfil.foto,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      nome: userEdit.nome,
                      data_nascimento: userEdit.data_nascimento,
                      telefone: userEdit.telefone,
                      cep: e.target.value,
                      email: userEdit.email,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                    });
                  } else if (statusUserDriver == 1) {
                    setUserEdit({
                      email: userEdit.email,
                      nome: userEdit.nome,
                      rg: userEdit.rg,
                      cpf: userEdit.cpf,
                      avaliacao: perfil.avaliacao,
                      cnh: e.target.value,
                      data_nascimento: userEdit.data_nascimento,
                      descricao: userEdit.descricao,
                      foto: userEdit.foto,
                      inicio_carreira: userEdit.inicio_carreira,
                      senha_atual: userEdit.senha_atual,
                      nova_senha: userEdit.nova_senha,
                      status_motorista: 1,
                      telefone: userEdit.telefone,
                    });
                  }
                }}
              >
                <InputInfosPerfil
                  props={{
                    placeholder: infosInput.cepCnhValue,
                    classNameLabel: "placeholder",
                    nameInput: infosInput.name,
                    classNameInput: "inputs-more-infos",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`input-perfil-email ${justifyContent}`}>
            <div
              onChange={(e) => {
                if (statusUserDriver == 2) {
                  setUserEdit({
                    foto: perfil.foto,
                    rg: userEdit.rg,
                    cpf: userEdit.cpf,
                    nome: userEdit.nome,
                    data_nascimento: userEdit.data_nascimento,
                    telefone: userEdit.telefone,
                    cep: userEdit.cep,
                    email: e.target.value,
                    senha_atual: userEdit.senha_atual,
                    nova_senha: userEdit.nova_senha,
                  });
                } else if (statusUserDriver == 1) {
                  setUserEdit({
                    email: e.target.value,
                    nome: userEdit.nome,
                    rg: userEdit.rg,
                    cpf: userEdit.cpf,
                    avaliacao: perfil.avaliacao,
                    cnh: userEdit.cnh,
                    data_nascimento: userEdit.data_nascimento,
                    descricao: userEdit.descricao,
                    foto: userEdit.foto,
                    inicio_carreira: userEdit.inicio_carreira,
                    senha_atual: userEdit.senha_atual,
                    nova_senha: userEdit.nova_senha,
                    status_motorista: 1,
                    telefone: userEdit.telefone,
                  });
                }
              }}
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
            <div
              onClick={() => {
                setInputValueInicioCarreira({
                  status: false,
                  data: "",
                  type: "date",
                });
              }}
              onChange={(e) => {
                setUserEdit({
                  email: userEdit.email,
                  nome: userEdit.nome,
                  rg: userEdit.rg,
                  cpf: userEdit.cpf,
                  avaliacao: perfil.avaliacao,
                  cnh: userEdit.cnh,
                  data_nascimento: userEdit.data_nascimento,
                  descricao: userEdit.descricao,
                  foto: userEdit.foto,
                  inicio_carreira: e.target.value,
                  senha_atual: userEdit.senha_atual,
                  nova_senha: userEdit.nova_senha,
                  status_motorista: 1,
                  telefone: userEdit.telefone,
                });
              }}
            >
              <InputInfosPerfil
                props={{
                  status_visibility: infosInput.status_visibility,
                  placeholder: inputValueInicioCarreira.placeholder,
                  classNameLabel: "placeholder",
                  status: inputValueInicioCarreira.status,
                  nameInput: "Data de inicio de carreira:",
                  type: inputValueInicioCarreira.type,
                  classNameInput: "inputs-more-infos",
                }}
              />
            </div>
          </div>
          <div className="container-inputs-perfil-passwords">
            <div
              onChange={(e) => {
                if (statusUserDriver == 2) {
                  setUserEdit({
                    foto: perfil.foto,
                    rg: userEdit.rg,
                    cpf: userEdit.cpf,
                    nome: userEdit.nome,
                    data_nascimento: userEdit.data_nascimento,
                    telefone: userEdit.telefone,
                    cep: userEdit.cep,
                    email: userEdit.email,
                    senha_atual: e.target.value,
                    nova_senha: userEdit.nova_senha,
                  });
                } else if (statusUserDriver == 1) {
                  setUserEdit({
                    email: userEdit.email,
                    nome: userEdit.nome,
                    rg: userEdit.rg,
                    cpf: userEdit.cpf,
                    avaliacao: perfil.avaliacao,
                    cnh: userEdit.cnh,
                    data_nascimento: userEdit.data_nascimento,
                    descricao: userEdit.descricao,
                    foto: userEdit.foto,
                    inicio_carreira: userEdit.inicio_carreira,
                    senha_atual: e.target.value,
                    nova_senha: userEdit.nova_senha,
                    status_motorista: 1,
                    telefone: userEdit.telefone,
                  });
                }
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
                if (statusUserDriver == 2) {
                  setUserEdit({
                    foto: perfil.foto,
                    rg: userEdit.rg,
                    cpf: userEdit.cpf,
                    nome: userEdit.nome,
                    data_nascimento: userEdit.data_nascimento,
                    telefone: userEdit.telefone,
                    cep: userEdit.cep,
                    email: userEdit.email,
                    senha_atual: userEdit.senha_atual,
                    nova_senha: e.target.value,
                  });
                } else if (statusUserDriver == 1) {
                  setUserEdit({
                    email: userEdit.email,
                    nome: userEdit.nome,
                    rg: userEdit.rg,
                    cpf: userEdit.cpf,
                    avaliacao: perfil.avaliacao,
                    cnh: userEdit.cnh,
                    data_nascimento: userEdit.data_nascimento,
                    descricao: userEdit.descricao,
                    foto: userEdit.foto,
                    inicio_carreira: userEdit.inicio_carreira,
                    senha_atual: userEdit.senha_atual,
                    nova_senha: e.target.value,
                    status_motorista: 1,
                    telefone: userEdit.telefone,
                  });
                }
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
          <div
            onChange={(e) => {
              setUserEdit({
                email: userEdit.email,
                nome: userEdit.nome,
                rg: userEdit.rg,
                cpf: userEdit.cpf,
                avaliacao: perfil.avaliacao,
                cnh: userEdit.cnh,
                data_nascimento: userEdit.data_nascimento,
                descricao: e.target.value,
                foto: userEdit.foto,
                inicio_carreira: userEdit.inicio_carreira,
                senha_atual: userEdit.senha_atual,
                nova_senha: userEdit.nova_senha,
                status_motorista: 1,
                telefone: userEdit.telefone,
              });
            }}
            className={`${infosInput.status_visibility} input-container-descri-driver`}
          >
            <InputInfosPerfil
              props={{
                classNameLabel: "placeholder",
                nameInput: "Descrição",
                classNameInput: "inputs-more-infos",
              }}
            />
          </div>
        </div>
      </div>
      <div className="container-buttons-perfil">
        <div
          onClick={() => {
            console.log(userEdit);
            /* updateUser(user, perfil.id, setStatusCode); */
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

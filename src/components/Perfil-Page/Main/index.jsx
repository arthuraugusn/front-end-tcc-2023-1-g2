import { Button, Modal, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { reload } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteUser } from "../../../api/client/deleteUser";
import { loadUserbyId } from "../../../api/client/loadUserbyId";
import { updateUser } from "../../../api/client/updateUser";
import { deleteDriver } from "../../../api/driver/deleteDriver";
import { loadDriverById } from "../../../api/driver/loadDriverById";
import { updateDriver } from "../../../api/driver/updateDriver";
import { uploadImage } from "../../../firebase/UploadProfilePictures/firebaseUploadProfilePictures";
import { OnChangeFunction } from "../../user/DadosAdicionaisUser-Page/Main/FotoPerfil";
import { ButtonsSaveDeletePerfil } from "./Button";
import { FotoPerfilPage } from "./Inputs/FotoPerfil";
import { InputInfosPerfil } from "./Inputs/InputInfos";
import { ModalPadrao } from "./Modal";
import "./style.css";
import Swal from "sweetalert2";
import { FormsUserFirst } from "./Forms/FormsUser/ContainerInputsFirst";
import { FormsDriverFirst } from "./Forms/FormsDriver/ContainerInputsFirts";
import { FormsDriverSecond } from "./Forms/FormsDriver/ContainerInputsSecond";
import { FormsUserSecond } from "./Forms/FormsUser/ContainerInputsSecond";
import { FormsDriverThird } from "./Forms/FormsDriver/ContainerInpusThird";
import { FormsUserThird } from "./Forms/FormsUser/ContainerInpusThird";
import { FormsUserFour } from "./Forms/FormsUser/ContainerInpusFour";
import { FormsDriverFour } from "./Forms/FormsDriver/ContainerInpusFour";
import { FormsDriverFive } from "./Forms/FormsDriver/ContainerInputsFive";
import { loadPrices } from "../../../api/driver/loadPrices";
import { updateUserEndereco } from "../../../api/client/updateUserEndereco";

export const MainPerfilPage = () => {
  const statusUserDriver = parseInt(localStorage.getItem("status_user_driver"));

  const [perfil, setPerfil] = useState({
    id_preco: {
      id: "",
    },
  });

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
  const [statusCodeCep, setStatusCodeUpdateCep] = useState(0);

  const [responseError, setResponseError] = useState({});

  const [cepCnhValue, setCepCnhValue] = useState({});

  const [justifyContent, setJustifyContent] = useState("");

  const [foto, setFoto] = useState("");

  const [statusFoto, setStatusFoto] = useState(false);

  const [statusEdit, setStatusEdit] = useState(false);

  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });

  const [defineDriverUser, setDefineDriverUser] = useState({
    user: "none",
    driver: "none",
  });

  const [prices, setPrices] = useState([
    {
      faixa_preco: "",
    },
  ]);

  const id = localStorage.getItem("id");

  const navigate = useNavigate();

  useEffect(() => {
    if (openCloseModal.value.toLowerCase() == "sim") {
      if (statusUserDriver == 2) {
        deleteUser(perfil.id, setStatusCode);
      }
      if (statusUserDriver == 1) {
        deleteDriver(perfil.id, setStatusCode);
      }
    }
  }, [openCloseModal.value]);

  useEffect(() => {
    if (statusEdit == true) {
      if (statusUserDriver == 1) {
        if (userEdit.senha_atual !== userEdit.nova_senha) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você inseriu a senha errada",
          }).then(() => {
            setStatusEdit(false);
          });
        } else {
          updateDriver(userEdit, perfil.id, setStatusCode);
        }
      }
      if (statusUserDriver == 2) {
        if (userEdit.senha_atual !== userEdit.nova_senha) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você inseriu a senha errada",
          }).then(() => {
            setStatusEdit(false);
          });
        } else {
          updateUser(userEdit, perfil.id, setStatusCode);
        }
      }
    }
  }, [statusEdit]);

  useEffect(() => {
    if (statusUserDriver == 2) {
      setJustifyContent("space-around");
      setDefineDriverUser({
        user: "true",
        driver: "none",
      });
      loadUserbyId(id, setResponseError);
    } else if (statusUserDriver == 1) {
      setDefineDriverUser({
        user: "none",
        driver: "true",
      });
      setJustifyContent("space-around");
      loadDriverById(id, setResponseError);
      loadPrices(setPrices);
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

    if (perfil.foto != undefined) {
      setFoto(perfil.foto);
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
      setUserEdit({
        foto: foto,
        rg: perfil.rg,
        cpf: perfil.cpf,
        nome: perfil.nome,
        data_nascimento: perfil.data_nascimento,
        telefone: perfil.telefone,
        cep: perfil.cep,
        email: perfil.email,
        nova_senha: undefined,
        senha_atual: undefined,
      });
    } else if (statusUserDriver == 1) {
      setInfosInput({
        cepCnhValue: perfil.cnh,
        name: "CNH:",
        status_visibility: "true",
      });
      setUserEdit({
        avaliacao: perfil.avaliacao,
        cnh: perfil.cnh,
        cpf: perfil.cpf,
        data_nascimento: perfil.data_nascimento,
        descricao: perfil.descricao,
        email: perfil.email,
        foto: perfil.foto,
        id_preco: perfil.id_preco,
        inicio_carreira: perfil.inicio_carreira,
        nome: perfil.nome,
        rg: perfil.rg,
        status_motorista: perfil.status_motorista,
        telefone: perfil.telefone,
        nova_senha: undefined,
        senha_atual: undefined,
      });
    }
  }, [perfil]);

  useEffect(() => {
    if (statusCode == 200) {
      navigate("/");
      localStorage.clear();
    } else if (statusCode == 201) {
      console.log(statusCodeCep);
      alert("Seu perfil foi atualizado com sucesso");
      window.location.reload();
    }

    if (statusFoto.t == true) {
      setFoto(statusFoto.img);
    }
  }, [statusCode, statusFoto, statusCodeCep]);

  useEffect(() => {
    if (statusUserDriver == 2) {
      setUserEdit({
        foto: foto,
        rg: userEdit.rg,
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
        rg: userEdit.rg,
        cpf: userEdit.cpf,
        avaliacao: perfil.avaliacao,
        cnh: userEdit.cnh,
        data_nascimento: userEdit.data_nascimento,
        descricao: userEdit.descricao,
        foto: foto,
        inicio_carreira: userEdit.inicio_carreira,
        senha_atual: userEdit.senha_atual,
        nova_senha: userEdit.nova_senha,
        status_motorista: 1,
        telefone: userEdit.telefone,
        id_preco: userEdit.id_preco,
      });
    }
  }, [foto]);

  return (
    <main className="container-main-perfil">
      <div className="container-h1-perfil">
        <h1>Perfil</h1>
      </div>
      <div className="container-itens-perfil">
        <div className="container-picture-perfil" onClick={(k) => {}}>
          <FotoPerfilPage
            props={{
              setStatusFoto: setStatusFoto,
              foto: foto,
            }}
          />
        </div>
        <div className="container-inputs-perfil-page">
          <div className="container-inputs-perfil-first">
            <div className={`inputs-perfil ${defineDriverUser.user}`}>
              <FormsUserFirst
                props={{
                  userEdit: userEdit,
                  setUserEdit: setUserEdit,
                  perfil: perfil,
                }}
              />
            </div>
            <div className={`inputs-perfil ${defineDriverUser.driver}`}>
              <FormsDriverFirst
                props={{
                  userEdit: userEdit,
                  setUserEdit: setUserEdit,
                  perfil: perfil,
                }}
              />
            </div>
            <div className={`inputs-perfil ${defineDriverUser.user}`}>
              <FormsUserSecond
                props={{
                  userEdit: userEdit,
                  setUserEdit: setUserEdit,
                  perfil: perfil,
                  setInputValueDataNascimento: setInputValueDataNascimento,
                  inputValueDataNascimento: inputValueDataNascimento,
                }}
              />
            </div>
            <div className={`inputs-perfil ${defineDriverUser.driver}`}>
              <FormsDriverSecond
                props={{
                  userEdit: userEdit,
                  setUserEdit: setUserEdit,
                  perfil: perfil,
                  setInputValueDataNascimento: setInputValueDataNascimento,
                  inputValueDataNascimento: inputValueDataNascimento,
                }}
              />
            </div>
          </div>
          <div className={`input-perfil-email ${justifyContent} `}>
            <div className={`${defineDriverUser.driver} ${justifyContent}`}>
              <FormsDriverThird
                props={{
                  setInputValueInicioCarreira: setInputValueInicioCarreira,
                  inputValueInicioCarreira: inputValueInicioCarreira,
                  perfil: perfil,
                  setUserEdit: setUserEdit,
                  userEdit: userEdit,
                }}
              />
            </div>
            <div className={`${defineDriverUser.user} ${justifyContent}`}>
              <FormsUserThird
                props={{
                  perfil: perfil,
                  setUserEdit: setUserEdit,
                  userEdit: userEdit,
                }}
              />
            </div>
          </div>
          <div className="container-inputs-perfil-passwords">
            <div className={`space-around ${defineDriverUser.user}`}>
              <FormsUserFour
                props={{
                  perfil: perfil,
                  setUserEdit: setUserEdit,
                  userEdit: userEdit,
                }}
              />
            </div>
            <div className={`${justifyContent} ${defineDriverUser.driver}`}>
              <FormsDriverFour
                props={{
                  perfil: perfil,
                  setUserEdit: setUserEdit,
                  userEdit: userEdit,
                }}
              />
            </div>
          </div>
          <div
            className={`${justifyContent} ${defineDriverUser.driver} coment`}
          >
            <FormsDriverFive
              props={{
                perfil: perfil,
                setUserEdit: setUserEdit,
                userEdit: userEdit,
                prices: prices,
                setPrices: setPrices,
              }}
            />
          </div>
        </div>
      </div>
      <div className="container-buttons-perfil">
        <div
          onClick={() => {
            if (statusUserDriver === 2) {
              if (
                userEdit.nova_senha === "" ||
                userEdit.nova_senha === undefined ||
                userEdit.nova_senha === null ||
                userEdit.senha_atual === "" ||
                userEdit.senha_atual === undefined ||
                userEdit.senha_atual === null
              ) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Você não preencheu a senha, tente novamente",
                }).then(() => {
                  setStatusEdit(false);
                });
              } else {
                setStatusEdit(true);
              }
            }
            if (statusUserDriver === 1) {
              if (
                userEdit.nova_senha === "" ||
                userEdit.nova_senha === undefined ||
                userEdit.nova_senha === null ||
                userEdit.senha_atual === "" ||
                userEdit.senha_atual === undefined ||
                userEdit.senha_atual === null
              ) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Você não preencheu a senha, tente novamente",
                }).then(() => {
                  setStatusEdit(false);
                });
              } else {
                setStatusEdit(true);
              }
            }
          }}
        >
          <ButtonsSaveDeletePerfil
            props={{ key: "button-form", label: "Salvar" }}
          />
        </div>
        <div
          onClick={() => {
            setOpenCloseModal({ status: true, value: openCloseModal.value });
          }}
        >
          <ButtonsSaveDeletePerfil
            props={{ key: "button-form", label: "Excluir" }}
          />
        </div>
        <ModalPadrao
          props={{
            message: "Você realmente deseja excluir seu perfil ?",
            openCloseModal: openCloseModal,
            setOpenCloseModal: setOpenCloseModal,
          }}
        />
      </div>
    </main>
  );
};

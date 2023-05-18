import { useEffect, useState } from "react";
import { FormsInfosDriver } from "./FormsInfosDriver";
import { FotoPerfilRegistroDriver } from "./FotoPerfil";
import "./style.css";
import { registerDriverClient } from "../../../../api/driver/registerUserClient";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loadPrices } from "../../../../api/driver/loadPrices";

export const MainDadosAdicionaisDriver = () => {
  const navigate = useNavigate();

  const [driverInfos, setDriverInfos] = useState({});

  const [responseError, setResponseError] = useState("");

  const [statusInput, setStatusInput] = useState(true);

  const [cpfNavigate, setCpfNavigate] = useState("");

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    loadPrices(setPrices);
  }, []);

  useEffect(() => {
    if (driverInfos.status_finalizado == 1) {
      if (
        driverInfos.img == undefined ||
        driverInfos.img == "" ||
        driverInfos.img == null ||
        driverInfos.rg == undefined ||
        driverInfos.rg == "" ||
        driverInfos.rg == null ||
        driverInfos.cpf == undefined ||
        driverInfos.cpf == "" ||
        driverInfos.cpf == null ||
        driverInfos.data_nascimento == undefined ||
        driverInfos.data_nascimento == "" ||
        driverInfos.data_nascimento == null ||
        driverInfos.email == undefined ||
        driverInfos.email == "" ||
        driverInfos.email == null ||
        driverInfos.senha == undefined ||
        driverInfos.senha == "" ||
        driverInfos.senha == null ||
        driverInfos.telefone == undefined ||
        driverInfos.telefone == "" ||
        driverInfos.telefone == null ||
        driverInfos.id_preco == undefined ||
        driverInfos.id_preco == "" ||
        driverInfos.id_preco == null
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Você não preencheu os dados corretamente, tente de novo",
        }).then(() => {
          window.location.reload();
        });
      } else {
        registerDriverClient(driverInfos, setResponseError);
        setCpfNavigate(driverInfos.cpf);
      }
    }
  }, [driverInfos]);

  useEffect(() => {
    if (responseError.status == 201) {
      navigate("/cadastro-van", { state: cpfNavigate });
    }
  }, [responseError]);

  useEffect(() => {
    if (driverInfos.statusImg == true) {
      setStatusInput(false);
    }
  }, [driverInfos.statusImg]);

  return (
    <main className="container-main-driver">
      <FotoPerfilRegistroDriver
        props={{ folder: "drivers-profile-picture", setUrlImg: setDriverInfos }}
      ></FotoPerfilRegistroDriver>
      <FormsInfosDriver
        props={{
          setDriverInfos: setDriverInfos,
          driverInfos: driverInfos,
          statusInput: statusInput,
          driver: driverInfos,
          setCpfNavigate: setCpfNavigate,
          prices: prices,
        }}
      ></FormsInfosDriver>
    </main>
  );
};

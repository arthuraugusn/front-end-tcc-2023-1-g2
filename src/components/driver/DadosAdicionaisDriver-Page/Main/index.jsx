import { useEffect, useState } from "react";
import { FormsInfosDriver } from "./FormsInfosDriver";
import { FotoPerfilRegistroDriver } from "./FotoPerfil";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loadPrices } from "../../../../api/driver/loadPrices";
import { registerDriverClient } from "../../../../api/driver/registerUserClient";

export const MainDadosAdicionaisDriver = () => {
  const navigate = useNavigate();

  const [driverInfos, setDriverInfos] = useState({});

  const [responseError, setResponseError] = useState({});

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    loadPrices(setPrices);
  }, []);

  useEffect(() => {
    if (driverInfos.status_finalizado === 1) {
      if (
        driverInfos.rg === undefined ||
        driverInfos.rg === "" ||
        driverInfos.rg === null ||
        driverInfos.cpf === undefined ||
        driverInfos.cpf === "" ||
        driverInfos.cpf === null ||
        driverInfos.data_nascimento === undefined ||
        driverInfos.data_nascimento === "" ||
        driverInfos.data_nascimento === null ||
        driverInfos.email === undefined ||
        driverInfos.email === "" ||
        driverInfos.email === null ||
        driverInfos.senha === undefined ||
        driverInfos.senha === "" ||
        driverInfos.senha === null ||
        driverInfos.telefone === undefined ||
        driverInfos.telefone === "" ||
        driverInfos.telefone === null ||
        driverInfos.id_preco === undefined ||
        driverInfos.id_preco === "" ||
        driverInfos.id_preco === null
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
      }
    }
  }, [driverInfos]);

  useEffect(() => {
    if (responseError.status === 201) {
      navigate("/cadastro-van", { state: driverInfos.cpf });
    }
  }, [responseError]);

  return (
    <main className="container-main-driver">
      <FotoPerfilRegistroDriver
        props={{ folder: "drivers-profile-picture", setUrlImg: setDriverInfos }}
      ></FotoPerfilRegistroDriver>
      <FormsInfosDriver
        props={{
          setDriverInfos: setDriverInfos,
          driverInfos: driverInfos,
          driver: driverInfos,
          prices: prices,
        }}
      ></FormsInfosDriver>
    </main>
  );
};

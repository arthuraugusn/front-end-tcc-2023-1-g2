import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { loadTypePaymentId } from "../../../../api/driver/loadTypePaymentId";
import { loadTypeTransportId } from "../../../../api/driver/loadTypeTransportId";
import { loadSchoolId } from "../../../../api/driver/loadSchoolId,";
import { loadUserbyId } from "../../../../api/client/loadUserbyId";
import { ButtonSaveDeleteContract } from "./Button";
import { ModalExcluirContrato } from "../../../allContracts/main/Modal";
import { registerContract } from "../../../../api/client/registerContract";
import Swal from "sweetalert2";

export const MainFinishContractPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [driver, setDriver] = useState({
    data_nascimento: "",
    van: [
      {
        placa: "",
      },
    ],
    id_preco: {
      faixa_preco: "",
    },
  });

  const [tipoPagamento, setTipoPagamento] = useState({
    data: { tipo_pagamento: "" },
  });
  const [tipoTransporte, setTipoTransporte] = useState({
    data: { tipo_contrato: "" },
  });
  const [escola, setEscola] = useState({
    nome: "",
  });

  const [user, setUser] = useState({});

  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });

  const [responseError, setResponseError] = useState(0);

  useEffect(() => {
    loadDriverById(location.state.id_motorista, setDriver);
    loadTypePaymentId(location.state.id_tipo_pagamento, setTipoPagamento);
    loadTypeTransportId(location.state.id_tipo_contrato, setTipoTransporte);
    loadSchoolId(location.state.id_escola, setEscola);
    loadUserbyId(localStorage.getItem("id"), setUser);
  }, []);

  useEffect(() => {
    if (openCloseModal.value.toLowerCase() == "sim") {
      registerContract(location.state, setResponseError);
    }
  }, [openCloseModal]);

  useEffect(() => {
    if (responseError.code == 201) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Seu contrato foi feito com sucesso",
      }).then(() => {
        navigate("/contracts");
      });
    }
  }, [responseError]);

  const dataAtual = new Date().getFullYear();

  return (
    <main className="container-main-finish-contract">
      <div className="container-finish-contract">
        <div className="container-name-button-return">
          <h1>Contrate</h1>
        </div>
        <div className="container-infos-contract">
          <div>
            <div>
              <p className="name-content-contract">Nome do responsável:</p>
              <p>{user.nome}</p>
            </div>
            <div>
              <p className="name-content-contract">Nome do passageiro:</p>
              <p>{location.state.nome_passageiro}</p>
            </div>
            <div>
              <p className="name-content-contract">Idade do passageiro:</p>
              <p>{location.state.idade_passageiro} anos</p>
            </div>
            <div>
              <p className="name-content-contract">Tipo de pagamento:</p>
              <p>{tipoPagamento.data.tipo_pagamento}</p>
            </div>
            <div>
              <p className="name-content-contract">Tipo de transporte:</p>
              <p>{tipoTransporte.data.tipo_contrato}</p>
            </div>
            <div>
              <p className="name-content-contract">Escola:</p>
              <p>{escola.nome}</p>
            </div>
            <div>
              <p className="name-content-contract">Endereço gigante aqui</p>
            </div>
          </div>
          <div>
            <div>
              <p className="name-content-contract">Nome do motorista:</p>
              <p>{driver.nome}</p>
            </div>
            <div>
              <p className="name-content-contract">Idade do motorista:</p>
              <p>{dataAtual - driver.data_nascimento.split("/")[2]} </p>
              <p>anos</p>
            </div>
            <div>
              <p className="name-content-contract">Placa da van:</p>
              <p>{driver.van[0].placa}</p>
            </div>

            <div>
              <p className="name-content-contract">Preço do serviço:</p>
              <p>{driver.id_preco.faixa_preco}</p>
            </div>
          </div>
        </div>
        <div
          className="container-button-envi-canc"
          onClick={() => {
            setOpenCloseModal({
              status: true,
              value: openCloseModal.value,
            });
          }}
        >
          <ButtonSaveDeleteContract
            props={{
              key: "button-form-contract",
              label: "Enviar contrato",
            }}
          />
        </div>
        <ModalExcluirContrato
          props={{
            message: "Você deseja concretizar este contrato ?",
            openCloseModal: openCloseModal,
            setOpenCloseModal: setOpenCloseModal,
          }}
        />
      </div>
    </main>
  );
};

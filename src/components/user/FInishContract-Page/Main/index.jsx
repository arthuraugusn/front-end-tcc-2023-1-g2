import { useLocation } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { loadTypePaymentId } from "../../../../api/driver/loadTypePaymentId";
import { loadTypeTransportId } from "../../../../api/driver/loadTypeTransportId";
import { loadSchoolId } from "../../../../api/driver/loadSchoolId,";
import { loadUserbyId } from "../../../../api/client/loadUserbyId";

export const MainFinishContractPage = () => {
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

  useEffect(() => {
    loadDriverById(location.state.id_motorista, setDriver);
    loadTypePaymentId(location.state.id_tipo_pagamento, setTipoPagamento);
    loadTypeTransportId(location.state.id_tipo_contrato, setTipoTransporte);
    loadSchoolId(location.state.id_escola, setEscola);
    loadUserbyId(localStorage.getItem("id"), setUser);
  }, []);

  const dataAtual = new Date().getFullYear();

  return (
    <main className="container-main-finish-contract">
      <div className="container-finish-contract">
        <div className="container-name-button-return">
          <h1>Contrate</h1>
        </div>
        <div className="container-infos-contract">
          <div>
            <p>
              Nome do responsável: <p>{user.nome}</p>
            </p>
            <p>
              Nome do passageiro: <p>{location.state.nome_passageiro}</p>
            </p>
            <p>
              Idade do passageiro: <p>{location.state.idade_passageiro} anos</p>
            </p>
            <p>
              Tipo de pagamento: <p>{tipoPagamento.data.tipo_pagamento}</p>
            </p>
            <p>
              Tipo de transporte: <p>{tipoTransporte.data.tipo_contrato}</p>
            </p>
            <p>
              Escola: <p>{escola.nome}</p>
            </p>
            <p>Endereço gigante aqui</p>
          </div>
          <div>
            <p>
              Nome do motorista: <p>{driver.nome}</p>
            </p>
            <p>
              Idade do motorista:{" "}
              <p>{dataAtual - driver.data_nascimento.split("/")[2]}</p>
            </p>
            <p>
              Placa da van: <p>{driver.van[0].placa}</p>
            </p>
            <p>
              Preço do serviço: <p>{driver.id_preco.faixa_preco}</p>
            </p>
          </div>
        </div>
        <div className="container-button-envi-canc"></div>
      </div>
    </main>
  );
};

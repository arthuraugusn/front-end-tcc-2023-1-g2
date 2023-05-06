import { useLocation } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { loadTypePaymentId } from "../../../../api/driver/loadTypePaymentId";
import { loadTypeTransportId } from "../../../../api/driver/loadTypeTransportId";
import { loadSchoolId } from "../../../../api/driver/loadSchoolId,";

export const MainFinishContractPage = () => {
  const location = useLocation();

  const [driver, setDriver] = useState({});

  const [tipoPagamento, setTipoPagamento] = useState({
    data: { tipo_pagamento: "" },
  });
  const [tipoTransporte, setTipoTransporte] = useState({
    data: { tipo_contrato: "" },
  });
  const [escola, setEscola] = useState({
    nome: "",
  });

  useEffect(() => {
    loadDriverById(location.state.id_motorista, setDriver);
    loadTypePaymentId(location.state.id_tipo_pagamento, setTipoPagamento);
    loadTypeTransportId(location.state.id_tipo_contrato, setTipoTransporte);
    loadSchoolId(location.state.id_escola, setEscola);
  }, []);

  useEffect(() => {
    /* console.log(tipoTransporte); */
  }, [tipoTransporte]);

  console.log(location.state);
  return (
    <main className="container-main-finish-contract">
      <div className="container-finish-contract">
        <div className="container-name-button-return">
          <h1>Contrate</h1>
        </div>
        <div className="container-infos-contract">
          <div>
            <p>Nome do responsável: {driver.nome}</p>
            <p>Nome do passageiro: {location.state.nome_passageiro}</p>
            <p>Idade do passageiro: {location.state.idade_passageiro} anos</p>
            <p>Tipo de pagamento: {tipoPagamento.data.tipo_pagamento}</p>
            <p>Tipo de transporte: {tipoTransporte.data.tipo_contrato}</p>
            <p>Escola: {escola.nome}</p>
          </div>
          <div></div>
        </div>
        <div className="container-button-envi-canc"></div>
      </div>
    </main>
  );
};

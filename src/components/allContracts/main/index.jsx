import { useEffect, useState } from "react";
import { loadUserContract } from "../../../api/client/loadUserContract";
import "./style.css";
import { CardContract } from "../Card";
import { ModalExcluirPerfil } from "../../Perfil-Page/Main/Modal/Excluir";
import { deleteContractUser } from "../../../api/client/deleteUserContract";

export const ContractsPage = () => {
  const [contracts, setAllUserContracts] = useState([]);
  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });
  const id = localStorage.getItem("id");

  const [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    loadUserContract(id, setAllUserContracts);
  });

  useEffect(() => {
    if (openCloseModal.value.toLowerCase() == "sim") {
      deleteContractUser(id, setStatusCode);
    }
  }, [openCloseModal]);

  useEffect(() => {
    if (statusCode != 0) {
      console.log(statusCode);
    }
  }, [statusCode]);

  return (
    <main className="main-container-allcontracts">
      <div className="name-container">
        <h1>Seus Contratos</h1>
      </div>
      <div className="allContracts-container">
        <CardContract
          props={{
            contracts: contracts,
            setOpenCloseModal: setOpenCloseModal,
            openCloseModal: openCloseModal,
          }}
        />
        <ModalExcluirPerfil
          props={{
            message: "Você realmente deseja excluir seu contrato ?",
            openCloseModal: openCloseModal,
            setOpenCloseModal: setOpenCloseModal,
          }}
        />
      </div>
    </main>
  );
};

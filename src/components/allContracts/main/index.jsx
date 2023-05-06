import { useEffect, useState } from "react";
import { loadUserContract } from "../../../api/client/loadUserContract";
import "./style.css";
import { CardContract } from "../Card";
import { ModalExcluirPerfil } from "../../Perfil-Page/Main/Modal/Excluir";
import { deleteContractUser } from "../../../api/client/deleteUserContract";
import Swal from "sweetalert2";

export const ContractsPage = () => {
  const [contracts, setAllUserContracts] = useState([]);

  const [idContract, setIdContract] = useState(0);

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
      deleteContractUser(idContract, setStatusCode);
    }
  }, [openCloseModal]);

  useEffect(() => {
    if (statusCode.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Seu contrato foi excluído com sucesso",
      }).then(() => {
        window.location.reload();
      });
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
            setIdContract: setIdContract,
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

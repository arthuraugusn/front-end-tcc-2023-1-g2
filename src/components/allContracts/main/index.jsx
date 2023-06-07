import { useEffect, useState } from "react";
import { loadUserContract } from "../../../api/client/loadUserContract";
import "./style.css";
import { CardContract } from "../Card";
import { ModalExcluirPerfil } from "../../Perfil-Page/Main/Modal/Excluir";
import { deleteContractUser } from "../../../api/client/deleteUserContract";
import Swal from "sweetalert2";
import { loadDriverContract } from "../../../api/driver/loadDriverContract";

export const ContractsPage = ({ props }) => {
  const [contracts, setAllUserContracts] = useState([]);

  const [idContract, setIdContract] = useState(0);

  const [mainStyle, setMainStyle] = useState("height-vh");

  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });
  const id = localStorage.getItem("id");

  const [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("status_user_driver") == 2) {
      loadUserContract(id, setAllUserContracts);
    } else if (localStorage.getItem("status_user_driver") == 1) {
      loadDriverContract(id, setAllUserContracts);
    }
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

  useEffect(() => {
    if (contracts.length > 2) {
      setMainStyle("height-auto");
      props.setStyleBody("height-auto");
    }
  }, [contracts]);

  return (
    <main className={`main-container-allcontracts`}>
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
      </div>
      <ModalExcluirPerfil
        props={{
          message: "Você realmente deseja excluir seu contrato ?",
          openCloseModal: openCloseModal,
          setOpenCloseModal: setOpenCloseModal,
        }}
      />
    </main>
  );
};

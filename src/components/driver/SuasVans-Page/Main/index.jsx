import { useEffect, useState } from "react";
import "./style.css";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { ModalExcluirVan } from "./Modal";
import { useNavigate } from "react-router-dom";
import { ButtonRemoverAdicionarVan } from "./Button";
import { deleteVan } from "../../../../api/driver/van/deleteVan";
import Swal from "sweetalert2";

export const MainSuasVans = ({ props }) => {
  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    van: [
      {
        id: 0,
        quantidade_vagas: "",
        placa: "",
        modelo: [
          {
            modelo: "",
          },
        ],
      },
    ],
  });

  const [van, setVan] = useState({
    quantidade_vagas: "",
    id: 0,
    placa: "",
    modelo: "",
    foto: "",
    id_modelo: 0,
    id_motorista: 0,
  });

  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });

  const [requisition, setRequisitions] = useState(1);

  const [requisitionDelete, setRequisitionDelete] = useState({
    id_van: 0,
    requisition: 0,
  });


  const [responseErrorDelete, setResposeErrorDelete] = useState({});

  const idDriver = localStorage.getItem("id");

  useEffect(() => {
    loadDriverById(idDriver, setDriver);
  });

  useEffect(() => {
    if (openCloseModal.value.toLowerCase() == "sim") {
      if (requisitionDelete.requisition == 1) {
        deleteVan(requisitionDelete.id_van, setResposeErrorDelete);
      }
    }
  }, [openCloseModal, requisitionDelete]);

  useEffect(() => {
    if (responseErrorDelete.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Tudo certo",
        text: "Sua van foi excluida com sucesso",
      }).then(() => {
        window.location.reload();
      });
    }
  }, [responseErrorDelete]);

  return (
    <main className="container-main-suas-vans">
      <div className="container-nameButton">
        <div className="box-name-h1">
          <h1>Suas Vans</h1>
        </div>
        <div
          className="container-button-redirect-add-van"
          onClick={() => {
            navigate("/add-van", { state: { id_motorista: driver.id } });
          }}
        >
          <ButtonRemoverAdicionarVan
            props={{
              message: "Adicionar Van",
              openCloseModal: openCloseModal,
              setOpenCloseModal: setOpenCloseModal,
            }}
          />
        </div>
      </div>

      <div className="container-suas-vans-card"> //DEPOIS JA VEM OS CARDS

      </div> //depois vem o modal
    </main>
  );
};

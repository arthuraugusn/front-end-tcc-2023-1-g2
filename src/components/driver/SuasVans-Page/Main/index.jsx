import { useEffect, useState } from "react";
import "./style.css";
import { loadDriverById } from "../../../../api/driver/loadDriverById";
import { ButtonRemoverVan } from "./Button";
import { ModalExcluirVan } from "./Modal";

export const MainSuasVans = ({ props }) => {
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

  const idDriver = localStorage.getItem("id");

  useEffect(() => {
    loadDriverById(idDriver, setDriver);
  }, []);

  useEffect(() => {
    setVan({
      quantidade_vagas: driver.van,
    });

    if (driver.van.length < 1) {
      props.setStyleBody("height-vh");
    } else if (driver.van.length > 1) {
      props.setStyleBody("height-auto");
    }
  }, [driver.van]);

  useEffect(() => {
    if (openCloseModal.value.toLowerCase() == "sim") {
      console.log(openCloseModal.value);
    }
  }, [openCloseModal]);

  return (
    <main className="container-main-suas-vans">
      <div className="box-name-h1">
        <h1>Suas Vans</h1>
      </div>
      <div className="container-suas-vans-card">
        {driver.van.map((e) => {
          return (
            <div className="card-driver van" key={`key: ${e.id}`}>
              <img className="container-image-van" src={e.foto} alt="" />
              <div className="container-infos-van">
                <p>Número de Vagas: {e.quantidade_vagas}</p>
                <p>Modelo da Van: {e.modelo[0].modelo}</p>
                <p>Placa da Van: {e.placa}</p>
              </div>
              <div>
                <ButtonRemoverVan
                  props={{
                    openCloseModal: openCloseModal,
                    setOpenCloseModal: setOpenCloseModal,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <ModalExcluirVan
        props={{
          message: "Você realmente deseja excluir sua van ?",
          openCloseModal: openCloseModal,
          setOpenCloseModal: setOpenCloseModal,
        }}
      />
    </main>
  );
};

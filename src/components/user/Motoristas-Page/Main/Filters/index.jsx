import { useState } from "react";
import { useEffect } from "react";
import { loadSchoolsDrivers } from "../../../../../api/client/loadSchools";
import { loadPrices } from "../../../../../api/driver/loadPrices";
import "./style.css";
import { ButtonRemoverAdicionarFiltro } from "../Button";
import { ModalFiltroMotoristas } from "../Modal";
import Swal from "sweetalert2";

export const FiltersMotoristas = ({ props }) => {
  const [schools, setSchools] = useState([{}]);

  const [responseError, setResponseError] = useState({});

  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });

  useEffect(() => {
    loadSchoolsDrivers(setSchools, setResponseError);
  }, []);

  useEffect(() => {
    if (openCloseModal.value.toLowerCase() === "sim") {
      if (props.chooseFilter !== "" || props.choosePrice !== "") {
        props.setValueFilters({
          driverName: props.valueFilters.driverName,
          price: props.valueFilters.price,
          school: props.valueFilters.school,
          status_filtrar: 1,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Você não inseriu informações corretas para o filtro",
        }).then(() => {
          window.location.reload();
        });
      }
    }
  }, [openCloseModal.value]);

  return (
    <>
      <div className="button-search-filter">
        <div
          onClick={() => {
            props.setValueFilters({
              driverName: props.valueFilters.driverName,
              price: props.valueFilters.price,
              school: props.valueFilters.school,
              /* status_filtrar: 1, */
            });
            setOpenCloseModal({ status: true, value: openCloseModal.value });
          }}
        >
          <ButtonRemoverAdicionarFiltro
            props={{
              message: "Filtrar",
              openCloseModal: openCloseModal,
              setOpenCloseModal: setOpenCloseModal,
            }}
          />
        </div>
      </div>
      <ModalFiltroMotoristas
        props={{
          message: "Você deseja filtrar ?",
          setOpenCloseModal: setOpenCloseModal,
          openCloseModal: openCloseModal,
        }}
      />
    </>
  );
};

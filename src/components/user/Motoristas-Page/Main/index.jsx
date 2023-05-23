import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { carregarMotoristas } from "../../../../api/client/loadDrivers.js";
import { getDriverByFilters } from "../../../../api/driver/filtersDriver.js";
import { Card } from "./Card";
import { FiltersMotoristas } from "./Filters/index.jsx";
import InputSearchItens from "./Input/index.jsx";
import "./style.css";
import { Navigate } from "react-router-dom";

export const MainMotoristasPage = ({ props }) => {
  const itensInput = {
    placeHolder: "Search...",
    id: "search-driver",
    class: "search-driver-input",
  };

  const [filters, setFilters] = useState({
    status: 0,
    response: {
      status: 0,
    },
  });

  const [valueFilters, setValueFilters] = useState({
    driverName: "",
    price: "",
    school: "",
    status_filtrar: 0,
  });

  const [driver, setDriver] = useState([]);

  useEffect(() => {
    if (valueFilters.status_filtrar === 0) {
      carregarMotoristas(setDriver);
    }
  }, []);

  useEffect(() => {
    if (valueFilters.status_filtrar === 1) {
      getDriverByFilters(
        valueFilters.price,
        valueFilters.school,
        valueFilters.driverName,
        setFilters
      );
    }
  }, [valueFilters]);

  useEffect(() => {
    if (filters.status === 200) {
      setDriver(filters.data.drivers);
    } else if (filters.response.status === 500) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Não temos motoristas relacionados com este filtro",
      }).then(() => {
        carregarMotoristas(setDriver);
      });
    } else {
      carregarMotoristas(setDriver);
    }
  }, [filters]);

  return (
    <main className="container-main-motoristas">
      <div className="box-name-h1">
        <h1>Motoristas</h1>
      </div>
      <div className="box-input-filter">
        <div
          onChange={(e) => [
            setValueFilters({
              driverName: e.target.value,
              price: valueFilters.price,
              school: valueFilters.school,
            }),
          ]}
        >
          <InputSearchItens props={itensInput} />
        </div>
        <FiltersMotoristas
          props={{
            setValueFilters: setValueFilters,
            valueFilters: valueFilters,
          }}
        />
      </div>
      <div className="box-motoristas-card">
        <Card driver={driver}></Card>
      </div>
    </main>
  );
};
                  
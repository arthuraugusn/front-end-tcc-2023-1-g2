import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { carregarMotoristas } from "../../../../api/client/loadDrivers.js";
import { getDriverByFilters } from "../../../../api/driver/filtersDriver.js";
import { Card } from "./Card";
import { FiltersMotoristas } from "./Filters/index.jsx";
import InputSearchItens from "./Input/index.jsx";
import "./style.css";
import { Navigate } from "react-router-dom";
import { FormControl, MenuItem, Select } from "@mui/material";
import { loadPrices } from "../../../../api/driver/loadPrices.js";

export const MainMotoristasPage = ({ props }) => {
  const itensInput = {};

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

  const [chooseFilter, setChooseFilter] = useState("");

  const [choosePrice, setChoosePrice] = useState("");

  const [prices, setPrices] = useState([{}]);

  const [openCloseModal, setOpenCloseModal] = useState({
    status: false,
    value: "",
  });

  const [statusInput, setStatusInput] = useState(true);

  useEffect(() => {
    if (valueFilters.status_filtrar === 0) {
      carregarMotoristas(setDriver);
      loadPrices(setPrices);
    }
  }, []);

  useEffect(() => {
    if (valueFilters.status_filtrar === 1) {
      console.log(valueFilters);
      if (chooseFilter !== "" || choosePrice !== "") {
        getDriverByFilters(
          valueFilters.price,
          valueFilters.school,
          valueFilters.driverName,
          setFilters
        );
      }
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
        window.location.reload();
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
        <div className="inputs-filters-motoristas">
          <div
            onChange={(e) => {
              if (chooseFilter !== "") {
                if (chooseFilter === "motorista") {
                  setValueFilters({
                    driverName: e.target.value,
                    price: valueFilters.price,
                  });
                } else if (chooseFilter === "escola") {
                  setValueFilters({
                    school: e.target.value,
                    price: valueFilters.price,
                  });
                }
              }
            }}
            className="input-search-filter-driver"
          >
            <InputSearchItens
              props={{
                placeHolder: "Search...",
                id: "search-driver",
                class: "search-driver-input",
                status: statusInput,
              }}
            />
          </div>
          <div className="container-filters-dropdown">
            <div
              onChange={(e) => {
                setValueFilters({
                  driverName: valueFilters.driverName,
                  price: e.target.value,
                  school: valueFilters.school,
                });

                setValueFilters({
                  driverName: valueFilters.driverName,
                  school: valueFilters.school,
                  price: e.target.value,
                });
              }}
            >
              <FormControl
                sx={{
                  minWidth: 150,
                }}
              >
                <Select
                  displayEmpty
                  onChange={(e) => {
                    setChooseFilter(e.target.value);
                    setStatusInput(false);
                  }}
                  value={chooseFilter}
                  sx={{
                    backgroundColor: "white",
                    height: 80,
                    borderRadius: 20,
                    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.363)",
                  }}
                >
                  <MenuItem value="">
                    <em>Escolha uma opção</em>
                  </MenuItem>
                  <MenuItem value="escola">
                    <em>Escola</em>
                  </MenuItem>
                  <MenuItem value="motorista">
                    <em>Nome Motorista</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{
                  minWidth: 150,
                }}
              >
                <Select
                  displayEmpty
                  onChange={(e) => {
                    setChoosePrice(e.target.value);
                  }}
                  value={choosePrice}
                  sx={{
                    backgroundColor: "white",
                    height: 80,
                    borderRadius: 20,
                    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.363)",
                  }}
                >
                  <MenuItem value="">
                    <em>Escolha uma opção</em>
                  </MenuItem>
                  {prices.map((e) => {
                    return (
                      <MenuItem value={e.faixa_preco}>
                        <em>R${e.faixa_preco}</em>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <FiltersMotoristas
          props={{
            setValueFilters: setValueFilters,
            valueFilters: valueFilters,
            chooseFilter: chooseFilter,
            choosePrice: choosePrice,
          }}
        />
      </div>
      <div className="box-motoristas-card">
        <Card driver={driver}></Card>
      </div>
    </main>
  );
};

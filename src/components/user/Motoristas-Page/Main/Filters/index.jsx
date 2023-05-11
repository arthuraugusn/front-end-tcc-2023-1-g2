import { useState } from "react";
import { useEffect } from "react";
import { loadSchoolsDrivers } from "../../../../../api/client/loadSchools";
import { loadPrices } from "../../../../../api/driver/loadPrices";
import "./style.css";

export const FiltersMotoristas = ({ props }) => {
  const [schools, setSchools] = useState([{}]);

  const [responseError, setResponseError] = useState({});

  const [prices, setPrices] = useState([{}]);

  useEffect(() => {
    loadSchoolsDrivers(setSchools, setResponseError);
    loadPrices(setPrices);
  }, []);

  return (
    <>
      <div className="filters-drivers">
        <select
          name="filtros"
          className="selects"
          onChange={(e) => {
            props.setValueFilters({
              driverName: props.valueFilters.driverName,
              price: props.valueFilters.price,
              school:
                e.currentTarget.childNodes[e.currentTarget.selectedIndex].id,
            });
          }}
        >
          <option>Escolha uma escola</option>
          {schools.map((e) => {
            return (
              <>
                <option id={e.id} key={e.id}>
                  {e.nome}
                </option>
              </>
            );
          })}
        </select>
        <select
          name="filtros"
          className="selects"
          onChange={(e) => {
            props.setValueFilters({
              driverName: props.valueFilters.driverName,
              price:
                e.currentTarget.childNodes[e.currentTarget.selectedIndex].id,
              school: props.valueFilters.school,
            });
          }}
        >
          <option>Escolha uma faixa de preços</option>
          {prices.map((e) => {
            return (
              <>
                <option id={e.id} key={e.id}>
                  {e.faixa_preco}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <div className="button-search-filter">
        <button
          onClick={() => {
            props.setValueFilters({
              driverName: props.valueFilters.driverName,
              price: props.valueFilters.price,
              school: props.valueFilters.school,
              status_filtrar: 1,
            });
          }}
        >
          Filtrar
        </button>
      </div>
    </>
  );
};

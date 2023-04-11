import { useEffect, useState } from "react";
import { carregarMotoristas } from "../../../../api/client/loadDrivers.js";
import { Card } from "./Card";
import InputSearchItens from "./Input/index.jsx";
import "./style.css";

export const MainMotoristasPage = ({ props }) => {
  const itensInput = {
    placeHolder: "Search...",
    id: "search-driver",
    class: "search-driver-input",
  };

  const [driver, setDriver] = useState([]);

  useEffect(() => {
    carregarMotoristas(setDriver);
  }, []);

  return (
    <main className="container-main-motoristas">
      <div className="box-name-h1">
        <h1>Motoristas</h1>
      </div>
      <div className="box-input-filter">
        <InputSearchItens props={itensInput}></InputSearchItens>
        {/* <InputSearch props={itensInput}></InputSearch> */}
        <select name="filtros" id="select-filter-container">
          <option value="">a</option>
          <option value="">b</option>
          <option value="">c</option>
        </select>
      </div>
      <div className="box-motoristas-card">
        <Card driver={driver}></Card>
      </div>
    </main>
  );
};

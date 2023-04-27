import { useEffect, useState } from "react";
import { CardVans } from "./Card";
import "./style.css";
import { loadDriverById } from "../../../../api/driver/loadDriverById";

export const MainSuasVans = () => {
  const [driver, setDriver] = useState({});

  const idDriver = localStorage.getItem("id");

  useEffect(() => {
    if (idDriver != "" || idDriver != null || idDriver != undefined) {
      loadDriverById(idDriver, setDriver);
    }
  }, []);

  return (
    <main className="container-main-suas-vans">
      <div className="box-name-h1">
        <h1>Suas Vans</h1>
      </div>
      <div className="container-suas-vans-card">
        {/* <CardVans props={driver} /> */}
      </div>
    </main>
  );
};

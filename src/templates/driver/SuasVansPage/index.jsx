import { useState } from "react";
import { FooterAllVansPage } from "../../../components/driver/SuasVans-Page/Footer";
import { HeaderSuasVansPage } from "../../../components/driver/SuasVans-Page/Header";
import { MainSuasVans } from "../../../components/driver/SuasVans-Page/Main";
import "../../reset/reset.css";
import "./body.css";

export default function SuasVansPage() {
  const [styleBody, setStyleBody] = useState("height-vh");
  return (
    <>
      <div className={`container-body-suas-vans ${styleBody}`}>
        <HeaderSuasVansPage />
        <MainSuasVans
          props={{
            setStyleBody: setStyleBody,
          }}
        />
        <FooterAllVansPage />
      </div>
    </>
  );
}

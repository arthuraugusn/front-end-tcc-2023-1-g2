import { FooterContractPage } from "../../components/Contract-Page/Footer";
import { HeaderAllContracts } from "../../components/allContracts/header";
import { ContractsPage } from "../../components/allContracts/main";
import "./style.css";
import "../reset/reset.css";
import { useState } from "react";

export default function ALlContractsPage() {
  const [styleBody, setStyleBody] = useState("height-vh");
  return (
    <>
      <div className={`container-main-footer-allContracts ${styleBody}`}>
        <HeaderAllContracts />
        <ContractsPage
          props={{
            setStyleBody: setStyleBody,
          }}
        />
        <FooterContractPage />
      </div>
    </>
  );
}

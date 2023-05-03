import { FooterContractPage } from "../../components/Contract-Page/Footer";
import { HeaderAllContracts } from "../../components/allContracts/header";
import { ContractsPage } from "../../components/allContracts/main";
import "./style.css";
import "../../templates/reset/reset.css";

export default function ALlContractsPage() {
  return (
    <>
      <div className="container-main-footer-allContracts">
        <HeaderAllContracts />
        <ContractsPage />
        <FooterContractPage />
      </div>
    </>
  );
}

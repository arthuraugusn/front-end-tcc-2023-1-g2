import { MainContractPage } from "../../../components/Contract-Page/Main";
import "../../reset/reset.css";
import { FooterContractPage } from "../../../components/Contract-Page/Footer";
import "./body.css";

export default function ContractPage({ props }) {
  return (
    <>
      <div className="container-main-footer-contract">
        <MainContractPage></MainContractPage>
        <FooterContractPage props={props}></FooterContractPage>
      </div>
    </>
  );
}

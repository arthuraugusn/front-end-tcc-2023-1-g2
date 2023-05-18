import { MainContractPage } from "../../../components/Contract-Page/Main";
import "../../reset/reset.css";
import { FooterContractPage } from "../../../components/Contract-Page/Footer";
import "./body.css";
import { FooterFinishContractPage } from "../../../components/user/FInishContract-Page/Footer";
import { MainFinishContractPage } from "../../../components/user/FInishContract-Page/Main";

export default function FinishContractPage({ props }) {
  return (
    <>
      <div className="container-main-footer-finish-contract">
        <MainFinishContractPage />
        <FooterFinishContractPage props={props} />
      </div>
    </>
  );
}

import { HeaderDadosAdicionaisDriver } from "../../../components/driver/DadosAdicionaisDriver-Page/Header";
import { MainDadosAdicionaisDriver } from "../../../components/driver/DadosAdicionaisDriver-Page/Main";
import "../../reset/reset.css";
import "./body.css";

export const DadosAdicionaisDriverPage = () => {
  return (
    <>
      <div className="container-body-dados-adicionais-driver">
        <div className="container-header-main-footer-da-driver">
          <HeaderDadosAdicionaisDriver></HeaderDadosAdicionaisDriver>
          <MainDadosAdicionaisDriver></MainDadosAdicionaisDriver>
        </div>
      </div>
    </>
  );
};

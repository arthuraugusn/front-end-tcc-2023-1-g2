import { FooterSuasEscolas } from "../../../components/driver/SuasEscolas-Page/Footer";
import { HeaderSuasEscolasPage } from "../../../components/driver/SuasEscolas-Page/Header";
import { MainSuasEscolas } from "../../../components/driver/SuasEscolas-Page/Main";
import "../../reset/reset.css";
import "./body.css";

export const SuasEscolasPage = () => {
  return (
    <>
      <div className="container-body-header-main-footer-suas-escolas">
        <HeaderSuasEscolasPage />
        <MainSuasEscolas />
        <FooterSuasEscolas />
      </div>
    </>
  );
};

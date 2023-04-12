import { HeaderDadosVan } from "../../../components/driver/CadastroVan-Page/Header";
import { MainDadosVan } from "../../../components/driver/CadastroVan-Page/Main";
import "../../reset/reset.css";
import "./body.css";

export const CadastrarVanPage = () => {
  return (
    <>
      <div className="container-body-dados-van">
        <div className="container-header-main-da-van">
          <HeaderDadosVan></HeaderDadosVan>
          <MainDadosVan></MainDadosVan>
        </div>
      </div>
    </>
  );
};

import { HeaderAdicionarvanPage } from "../../../components/driver/AdicionarVan-Page/Header";
import { MainAdicionarVanPage } from "../../../components/driver/AdicionarVan-Page/Main";

export const AdicionarVanPage = () => {
  return (
    <div className="container-body-sua-van">
      <div className="container-header-main-footer-sua-van">
        <HeaderAdicionarvanPage />
        <MainAdicionarVanPage />
      </div>
    </div>
  );
};

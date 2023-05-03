import { HeaderSuasVansPage } from "../../../components/driver/SuasVans-Page/Header";
import { MainSuasVans } from "../../../components/driver/SuasVans-Page/Main";
import "../../reset/reset.css";
import "./body.css";

export default function SuasVansPage() {
  return (
    <>
      <div className="container-body-suas-vans">
        <HeaderSuasVansPage />
        <MainSuasVans />
      </div>
    </>
  );
}

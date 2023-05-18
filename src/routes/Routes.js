import { HashRouter, Route, Routes } from "react-router-dom";
import MotoristasPage from "../templates/user/MotoristasPage";
import { LoginPage } from "../templates/LoginPage";
import { RegisterPage } from "../templates/RegisterPage";
import ChoosePage from "../templates/ChoosePage";
import { DadosAdicionaisUserPage } from "../templates/user/DadosAdicionaisUserPage";
import HomePage from "../templates/HomePage";
import ContractPage from "../templates/user/Contract-page";
import { DadosAdicionaisDriverPage } from "../templates/driver/DadosAdicionaisDriver";
import { CadastrarVanPage } from "../templates/driver/CadastroVanPage";
import { PerfilPage } from "../templates/PerfilPage";
import ALlContractsPage from "../templates/All-Contracts/body";
import SuasVansPage from "../templates/driver/SuasVansPage";
import FinishContractPage from "../templates/user/FinishContractPage";
import { NotificationsPage } from "../templates/NotificationsPage/body";
import { VanPage } from "../templates/driver/VanPage";
import { AdicionarVanPage } from "../templates/driver/AdicionarVanPage";
import { MoreAboutDriversPage } from "../templates/user/MoreAboutDriverPage/index";
import { SuasEscolasPage } from "../templates/driver/SuasEscolasPage";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route Component={LoginPage} path="/login" />
        <Route Component={RegisterPage} path="/register" />
        <Route Component={ChoosePage} path="/choose-page" />
        <Route
          Component={DadosAdicionaisUserPage}
          path="/dados-adicionais-user"
        />
        <Route
          Component={DadosAdicionaisDriverPage}
          path="/dados-adicionais-driver"
        />
        <Route Component={CadastrarVanPage} path="/cadastro-van" />

        <Route element={<HomePage props={true} />} path="/" />

        <Route element={<MotoristasPage props={true} />} path="/motoristas" />
        <Route
          Component={MoreAboutDriversPage}
          props={true}
          path="/more-about-the-driver"
        />
        <Route
          element={<NotificationsPage props={true} />}
          path="/notifications"
        />
        <Route Component={ALlContractsPage} props={true} path="/contracts" />
        <Route Component={ContractPage} props={true} path="/contract" />
        <Route Component={PerfilPage} path="/perfil" />
        <Route Component={SuasVansPage} path="/suas-vans" />
        <Route Component={VanPage} path="/sua-van" />
        <Route Component={AdicionarVanPage} path="/add-van" />
        <Route
          Component={FinishContractPage}
          props={true}
          path="/contract/finish"
        />
        <Route Component={SuasEscolasPage} path="/suas-escolas" />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;

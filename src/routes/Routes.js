import { HashRouter, Route, Routes } from "react-router-dom";
import MotoristasPage from "../templates/user/MotoristasPage";
import { LoginPage } from "../templates/LoginPage";
import { RegisterPage } from "../templates/RegisterPage";
import ChoosePage from "../templates/ChoosePage";
import { DadosAdicionaisUserPage } from "../templates/user/DadosAdicionaisUserPage";
import HomePage from "../templates/HomePage";
import ContractPage from "../templates/user/Contract-page";

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
        <Route element={<HomePage props={true} />} path="/" />
        <Route element={<MotoristasPage props={true} />} path="/motoristas" />
        <Route Component={ContractPage} path="/contract" />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;

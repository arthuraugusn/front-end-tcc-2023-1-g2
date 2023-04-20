import "./style.css";
import "../reset/reset.css";
import { HeaderPerfilPage } from "../../components/Perfil-Page/Header";
import { FooterPerfilPage } from "../../components/Perfil-Page/Footer";
import { MainPerfilPage } from "../../components/Perfil-Page/Main";

export const PerfilPage = () => {
  return (
    <>
      <div className="body-perfil-page">
        <HeaderPerfilPage />
        <MainPerfilPage />
        <FooterPerfilPage />
      </div>
    </>
  );
};

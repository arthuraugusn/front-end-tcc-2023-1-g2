import { useNavigate } from "react-router-dom";
import { HeaderVanPage } from "../../../components/driver/Van-Page/Header";
import { MainSuaVanPage } from "../../../components/driver/Van-Page/Main";
import "../../reset/reset.css";
import "./style.css";

export const VanPage = () => {
  return (
    <div className="container-body-sua-van">
      <div className="container-header-main-footer-sua-van">
        <HeaderVanPage props={{ url: "/suas-vans" }} />
        <MainSuaVanPage />
      </div>
    </div>
  );
};

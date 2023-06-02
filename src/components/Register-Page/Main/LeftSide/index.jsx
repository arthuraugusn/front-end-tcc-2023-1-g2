import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInfosUser } from "../../../../firebase/LoginRegisterGoogle/firebaseGoogleLoginRegister";
import "./style.css";

export const LeftSide = () => {
  const [userInfos, setUserInfos] = useState([]);
  const [changePage, setChangePage] = useState(0);
  const navigation = useNavigate();
  useEffect(() => {
    if (changePage == 1) {
      navigation("/choose-page", userInfos);
    }
  }, [userInfos]);

  return (
    <div className="left-side-register">
      <span className="entry-text">
        Cadastre-se e conheça a nossa plataforma
      </span>

      <div className="bottom-text">
        <span className="thin-text">Já tem uma conta?</span>
        <Link to="/login">
          <span className="bold-text">Entre</span>
        </Link>
      </div>
    </div>
  );
};

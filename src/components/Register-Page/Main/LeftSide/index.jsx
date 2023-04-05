import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInfosUser } from "../../../../firebase/LoginRegisterGoogle/firebaseGoogleLoginRegister";
import "./style.css";

export const LeftSide = () => {
  /* const [driverGoogle, setDriverGoogle] = useState([]); */
  /* useEffect(() => {
    getInfosUser(setDriverGoogle);
  }, []); */
  const [userInfos, setUserInfos] = useState([]);
  const [final, set] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    set(userInfos.email);
  }, [userInfos]);

  return (
    <div className="left-side-register">
      <span className="entry-text">
        Cadastre-se e conheça a nossa plataforma
      </span>
      <button
        type="button"
        className="google-register"
        id="button-register-google"
        onClick={() => {
          getInfosUser(userInfos, setUserInfos);
        }}
      >
        <FontAwesomeIcon icon={faG} />
        Continuar com Google
      </button>
      <div className="bottom-text">
        <span className="thin-text">Já tem uma conta?</span>
        <Link to="/login">
          <span className="bold-text">Entre</span>
        </Link>
      </div>
    </div>
  );
};

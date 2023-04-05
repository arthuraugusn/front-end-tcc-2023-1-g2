import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

export const RightSide = () => {
  return (
    <div className="right-side">
      <span className="entry-text">
        Faça o login e conheça a nossa plataforma
      </span>
      <button type="button" className="google-register">
        <FontAwesomeIcon icon={faG} />
        Continuar com Google
      </button>
      <div className="bottom-text">
        <span className="thin-text">Não tem uma conta?</span>
        <Link to="/register">
          <span className="bold-text">Registre-se</span>
        </Link>
      </div>
    </div>
  );
};

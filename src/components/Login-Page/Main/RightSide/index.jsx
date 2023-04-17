import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { loadDriverByLogin } from "../../../../api/driver/loginDriver";
import { useState } from "react";

export const RightSide = ({ props }) => {
  return (
    <div className="right-side">
      <span className="entry-text">
        Faça o login e conheça a nossa plataforma
      </span>
      <button
        onClick={() => {
          console.log(props);
        }}
        type="button"
        className="google-register"
      >
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

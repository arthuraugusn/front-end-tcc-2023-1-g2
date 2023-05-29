import { Link } from "react-router-dom";
import "./style.css";
import { loadDriverByLogin } from "../../../../api/driver/loginDriver";
import { useState } from "react";

export const RightSide = ({ props }) => {
  return (
    <div className="right-side">
      <span className="entry-text">
        Faça o login e conheça a nossa plataforma
      </span>
      <div className="bottom-text">
        <span className="thin-text">Não tem uma conta?</span>
        <Link to="/register">
          <span className="bold-text">Registre-se</span>
        </Link>
      </div>
    </div>
  );
};

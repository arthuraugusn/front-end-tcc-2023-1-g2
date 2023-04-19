import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const MenuBurguer = ({ props }) => {
  const idUsuario = localStorage.getItem("idUsuario");

  const [itensHeader, setItensHeader] = useState("none");

  useEffect(() => {
    if (idUsuario != undefined && idUsuario != null && idUsuario != "") {
      setItensHeader("true");
    }
  }, [idUsuario]);

  const navigate = useNavigate();

  const Menu = () => {
    const menu = document.querySelector(".menu-burguer-container");

    function menuAction() {
      menu.classList.toggle("show");
    }

    menu.addEventListener("click", menuAction);
  };

  return (
    <nav>
      <Link to="#" className="menu-burguer-container" onClick={Menu}>
        <i className="menu-burguer"></i>
      </Link>
      <ul className={"text-container"}>
        <nav className="nav-container">
          <li
            onClick={() => {
              navigate("/motoristas", { state: props });
            }}
            className={"nav-itens " + props}
          >
            Motoristas
          </li>

          <li
            onClick={() => {
              navigate("/contract", { state: props });
            }}
            className={"nav-itens " + props}
          >
            Seus Contratos
          </li>

          <li
            onClick={() => {
              navigate("/");
            }}
            className={`nav-itens ${props} ${itensHeader}`}
          >
            <FontAwesomeIcon icon={faBell} />
          </li>

          <li
            onClick={() => {
              navigate("/");
            }}
            className={`nav-itens ${props} ${itensHeader}`}
          >
            <FontAwesomeIcon icon={faUser} />
          </li>
        </nav>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className={"button-login " + props}
        >
          Entrar / Registrar
        </button>
      </ul>
    </nav>
  );
};

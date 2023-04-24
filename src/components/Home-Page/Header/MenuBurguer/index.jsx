import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const MenuBurguer = ({ props }) => {
  const idUsuario = localStorage.getItem("id");

  const [itensHeader, setItensHeader] = useState({
    statusButton: "flex",
    statusIcons: "none",
  });

  const [idIcon, setIdIcon] = useState("");

  useEffect(() => {
    if ((idUsuario != undefined && idUsuario != "") || idUsuario != null) {
      setItensHeader({ statusButton: "none", statusIcons: "true" });

      setIdIcon(idUsuario.toString());
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
            className={`nav-itens ${props} ${itensHeader.statusIcons}`}
          >
            <FontAwesomeIcon icon={faBell} />
          </li>

          <li
            id={idIcon}
            onClick={() => {
              navigate("/perfil");
            }}
            className={`nav-itens ${props} ${itensHeader.statusIcons}`}
          >
            <FontAwesomeIcon icon={faUser} />
          </li>
        </nav>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className={`button-login ${props} ${itensHeader.statusButton}`}
        >
          Entrar / Registrar
        </button>
      </ul>
    </nav>
  );
};

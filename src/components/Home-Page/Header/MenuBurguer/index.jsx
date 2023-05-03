import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const MenuBurguer = ({ props }) => {
  const navigate = useNavigate();

  const idUsuario = localStorage.getItem("id");

  const statusUserDriver = localStorage.getItem("status_user_driver");

  const [itensHeader, setItensHeader] = useState({
    statusButton: "flex",
    statusIcons: "none",
  });

  const [statusHeaderDriverUser, setStatusHeaderDriverUser] = useState({
    status_motorista: "none",
    status_user: "none",
  });

  const [idIcon, setIdIcon] = useState("");

  const [statusLogout, setStatusLogout] = useState(0);

  useEffect(() => {
    if ((idUsuario != undefined && idUsuario != "") || idUsuario != null) {
      setItensHeader({ statusButton: "none", statusIcons: "true" });

      setIdIcon(idUsuario.toString());
    }

    if (statusUserDriver == 1) {
      setStatusHeaderDriverUser({
        status_motorista: "true",
        status_user: "none",
      });
    } else if (statusUserDriver == 2) {
      setStatusHeaderDriverUser({
        status_motorista: "none",
        status_user: "true",
      });
    }
  }, [idUsuario, statusUserDriver]);

  useEffect(() => {
    if (statusLogout == 1) {
      console.log(1);
      localStorage.clear();
      navigate("/");
      window.location.reload();
    }
  }, [statusLogout]);

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
            className={`nav-itens ${props} ${statusHeaderDriverUser.status_motorista}`}
          >
            Seus Contratos
          </li>

          <li
            onClick={() => {
              navigate("/suas-vans", { state: props });
            }}
            className={`nav-itens ${props} ${statusHeaderDriverUser.status_motorista}`}
          >
            Suas Vans
          </li>

          <li
            onClick={() => {
              navigate("/motoristas", { state: props });
            }}
            className={`nav-itens ${props} ${statusHeaderDriverUser.status_motorista}`}
          >
            Suas Escolas
          </li>

          <li
            onClick={() => {
              navigate("/motoristas", { state: props });
            }}
            className={`nav-itens ${props} ${statusHeaderDriverUser.status_user}`}
          >
            Motoristas
          </li>

          <li
            onClick={() => {
              navigate("/contracts", { state: props });
            }}
            className={`nav-itens ${props} ${statusHeaderDriverUser.status_user}`}
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
              /* navigate("/perfil"); */
            }}
            className={`dropdown nav-itens ${props}  ${itensHeader.statusIcons}`}
          >
            <div className={`dropbtn ${props}`}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="dropdown-content-perfil">
              <p
                onClick={() => {
                  navigate("/perfil");
                }}
              >
                Perfil
              </p>
              <p
                onClick={() => {
                  setStatusLogout(1);
                }}
              >
                Logout
              </p>
            </div>
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

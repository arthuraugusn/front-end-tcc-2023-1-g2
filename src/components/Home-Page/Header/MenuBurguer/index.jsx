import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export const MenuBurguer = ({ props }) => {
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
            className={"nav-itens " + props}
            onClick={() => {
              navigate("/localize-se");
            }}
          >
            Localize-se
          </li>
          <li
            onClick={() => {
              navigate("/motoristas");
            }}
            className={"nav-itens " + props}
          >
            Motoristas
          </li>
  
          <li
            onClick={() => {
              navigate("/contract");
            }}
            className={"nav-itens " + props}
          >
            Seus Contratos
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

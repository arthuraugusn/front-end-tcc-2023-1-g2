import "./style.css";
import { Link } from "react-router-dom";

export const MenuBurguer = ({ props }) => {
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
        <Link to="/localize-se" className="nav-itens">
          <li className={"nav-itens " + props}>Localize-se</li>
        </Link>
        <Link to="/motoristas" className="nav-itens">
          <li className={"nav-itens " + props}>Motoristas</li>
        </Link>

        <li className={"nav-itens " + props}>Seus Contratos</li>
      </ul>
    </nav>
  );
};
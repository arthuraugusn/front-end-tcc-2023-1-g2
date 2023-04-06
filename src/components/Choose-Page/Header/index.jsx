import { useNavigate } from "react-router-dom";
import { Logo } from "../../Home-Page/Header/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

export const HeaderChoosePage = ({ props }) => {
  const navigation = useNavigate();

  return (
    <>
      <header className="header-choose-page">
        <Logo></Logo>
        <div className="container-button-voltar">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p
            onClick={() => {
              navigation(props.url);
            }}
          >
            Voltar
          </p>
        </div>
      </header>
    </>
  );
};

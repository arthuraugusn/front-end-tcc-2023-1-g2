import "./style.css";
import { Logo } from "../../../Home-Page/Header/Logo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export const FooterMotoristas = () => {
  return (
    <>
      <footer>
        <div className="contact-us">
          <div className="icon-contact">
            <WhatsAppIcon />
            <span>Whatsapp</span>
          </div>
          <div className="icon-contact">
            <InstagramIcon />
            <span>Instagram</span>
          </div>
        </div>
        <div className="footer-localization">
          <div className="logo-footer">
            <Logo />
            <span>©Copyright 2023 - Vanbora</span>
          </div>
        </div>
        <div className="localization-company">
          <div>
            <span>Avenida dos Autonomistas, nº 1496</span>
          </div>
          <div>
            <span>Vila Yara, Osasco/SP - CEP 06.020-902</span>
          </div>
        </div>
      </footer>
    </>
  );
};

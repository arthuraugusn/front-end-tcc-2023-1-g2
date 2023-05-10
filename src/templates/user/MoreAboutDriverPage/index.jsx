import "./style.css";
import "../../reset/reset.css"
import { HeaderMoreAboutDrivers } from "../../../components/user/MoreAboutDrivers-Page/Header/index.jsx";
import { MainMoreAboutDrivers } from "../../../components/user/MoreAboutDrivers-Page/Main/index.jsx";
import { FooterMoreAboutDrivers } from "../../../components/user/MoreAboutDrivers-Page/Footer/index.jsx";


export const MoreAboutDriversPage = () => {
  return(
    <div className="body-MoreAboutDrivers">
      
    <HeaderMoreAboutDrivers></HeaderMoreAboutDrivers>
    <MainMoreAboutDrivers></MainMoreAboutDrivers>
    <FooterMoreAboutDrivers></FooterMoreAboutDrivers>
  
    </div>
  )
}
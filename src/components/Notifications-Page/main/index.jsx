import "./style.css"
import InputSearchItens from "../../user/Motoristas-Page/Main/Input"
import { CardsNotifications } from "../cards/index.jsx";
export const MainNotifications = () =>{
  const itensInput = {
    placeHolder: "Search...",
    id: "search-driver",
    class: "search-driver-input",
  };
 return(
  <main>
    <div className="main-name-container">
      <h1>Notificações</h1>
    </div>
    <div className="filter-container-part">
      <InputSearchItens props={itensInput}></InputSearchItens>
    </div>
    <div className="cards-notifications-container">
        <CardsNotifications></CardsNotifications>
    </div>
  </main>
 )
}
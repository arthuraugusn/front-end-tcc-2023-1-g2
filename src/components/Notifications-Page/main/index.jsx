import "./style.css";
import InputSearchItens from "../../user/Motoristas-Page/Main/Input";
import { CardsNotifications } from "../cards/index.jsx";
import { useEffect } from "react";
import { loadUserContract } from "../../../api/client/loadUserContract";
import { useState } from "react";
import { loadDriverContract } from "../../../api/driver/loadDriverContract";
export const MainNotifications = () => {
  const [userContracts, setAllUserContracts] = useState([{}]);

  useEffect(() => {
    if (localStorage.getItem("status_user_driver") == 2) {
      loadUserContract(localStorage.getItem("id"), setAllUserContracts);
    } else if (localStorage.getItem("status_user_driver") == 1) {
      loadDriverContract(localStorage.getItem("id"), setAllUserContracts);
    }
  });

  return (
    <main className="main-notifications">
      <div className="name-container-notifications">
        <h1>Notificações</h1>
      </div>
      <div className="cards-notifications-container">
        <CardsNotifications
          props={{
            userContracts: userContracts,
          }}
        />
      </div>
    </main>
  );
};

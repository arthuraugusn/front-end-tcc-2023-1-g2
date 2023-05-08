import { MainNotifications } from "../../components/Notifications-Page/main/index";
import {FooterNotifications} from "../../components/Notifications-Page/footer/index";
import "./style.css";
import "../reset/reset.css";
import { useState } from "react";

export const NotificationsPage = ({props}) => {
  return (
    <>
      <div className="body-notifications-page">
        <MainNotifications></MainNotifications>
      </div>
      <div>
        <FooterNotifications></FooterNotifications>
      </div>
        
    </>
  );
}; 
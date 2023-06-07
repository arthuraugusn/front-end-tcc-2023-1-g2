import { MainNotifications } from "../../components/Notifications-Page/main/index";
import { FooterNotifications } from "../../components/Notifications-Page/footer/index";
import {NotificationsHeader} from "../../components/Notifications-Page/header/index"
import "./style.css";
import "../reset/reset.css";
import { useState } from "react";

export const NotificationsPage = ({ props }) => {
  return (
    <>
      <div className="body-notifications-page">
        <NotificationsHeader></NotificationsHeader>
        <MainNotifications></MainNotifications>
        <FooterNotifications></FooterNotifications>
      </div>
    </>
  );
}; 
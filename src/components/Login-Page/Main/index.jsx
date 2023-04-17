import { useState } from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import "./style.css";

export const MainLogin = () => {
  const [infosLogin, setInfosLogin] = useState("");

  return (
    <main className="container-main-side">
      <LeftSide prop={setInfosLogin}></LeftSide>
      <RightSide props={infosLogin}></RightSide>
    </main>
  );
};

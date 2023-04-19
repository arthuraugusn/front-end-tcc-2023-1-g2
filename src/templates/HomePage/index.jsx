import { MainHomePage } from "../../components/Home-Page/Main";
import "./body.css";
import "../reset/reset.css";
import { HeaderHomePage } from "../../components/Home-Page/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage({ props }) {
  if (props == true) {
    props = "white";
  }

  const [state, setState] = useState({});

  return (
    <>
      <div className="body-home">
        <HeaderHomePage props={props}></HeaderHomePage>
        <MainHomePage></MainHomePage>
      </div>
    </>
  );
}

export default HomePage;

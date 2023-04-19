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
  const location = useLocation();

  const [state, setState] = useState({});

  const [headerItens, setHeaderItens] = useState({
    idUsuario: 0,
    status: false,
  });

  useEffect(() => {
    setState(location.state);
    if (state) {
      setHeaderItens({
        idUsuario: state.id,
        status: true,
        token: state.token,
      });
      localStorage.setItem("idUsuario", state.id);
      localStorage.setItem("tokenJwt", state.token);
    }
  }, [state]);

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

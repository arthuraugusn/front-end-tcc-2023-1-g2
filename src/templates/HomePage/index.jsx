import { MainHomePage } from "../../components/Home-Page/Main";
import "./body.css";
import "../reset/reset.css";
import { HeaderHomePage } from "../../components/Home-Page/Header";

function HomePage({ props }) {
  if (props === true) {
    props = "white";
  }

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

import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { Link } from "react-router-dom";
import "./style.css";

export const Logo = ({ props }) => {
  return (
    <div className="logo-container">
      <Link to="/">
        <div className="logo-content">
          <div className="ball">
            <AirportShuttleIcon
              sx={{
                color: "white",
              }}
            />
          </div>
          <div className={props}>
            <span className="name">Vanbora</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

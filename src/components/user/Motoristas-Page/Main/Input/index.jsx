import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

export const InputSearchItens = ({ props }) => {
  return (
    <div className="inputs">
      <SearchIcon fontSize="large" className="search-number" />
      <input
        placeholder={props.placeholder}
        type="text"
        className="input"
        name={props.name}
        id={props.id}
        key={props.id}
        disabled={props.status}
      />
    </div>
  );
};

export default InputSearchItens;

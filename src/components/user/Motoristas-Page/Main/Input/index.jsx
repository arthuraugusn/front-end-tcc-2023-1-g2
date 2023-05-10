import "./style.css";

export const InputSearchItens = ({ props }) => {
  return (
    <div className="inputs">
      <label
        htmlFor={props.id}
        className="material-symbols-outlined search-number"
      >
        search
      </label>
      <input
        placeholder={props.placeholder}
        type="text"
        className="input"
        name={props.name}
        id={props.id}
        key={props.id}
      />
    </div>
  );
};

export default InputSearchItens;

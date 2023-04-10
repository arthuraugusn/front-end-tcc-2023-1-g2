import "./style.css";

export const ButtonChoose = ({ props }) => {
  return (
    <button key={props.key} className="button" type="button">
      {props.label}
    </button>
  );
};

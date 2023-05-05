import "./style.css";

export const ButtonModal = ({ props }) => {
  return (
    <button onClick={props.onClick} key={props.key} className="button-modal" type="button">
      {props.label}
    </button>
  );
};

import "./style.css";

export const ButtonModal = ({ props }) => {
  return (
    <button key={props.key} className="button-modal" type="button">
      {props.label}
    </button>
  );
};

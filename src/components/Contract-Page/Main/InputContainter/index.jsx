import "./style.css";

export const InputContainer = ({ props }) => {
  return (
    <div className="input-container">
      <label htmlFor="password" className={props.classNameLabel}>
        {props.nameInput}
      </label>
      <input type={props.type} className={props.classNameInput} required />
    </div>
  );
};

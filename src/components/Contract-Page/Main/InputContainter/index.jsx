import { useEffect, useState } from "react";
import "./style.css";

export const InputContainer = ({ props }) => {
  return (
    <div className="input-container">
      <label htmlFor="password" className={props.classNameLabel}>
        {props.nameInput}
      </label>
      <input type="text" className={props.classNameInput} required />
    </div>
  );
};

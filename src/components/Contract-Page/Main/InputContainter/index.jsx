import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export const InputContainer = ({ props }) => {
  return (
    <div className={`input-container`}>
      <label htmlFor="password" className={props.classNameLabel}>
        {props.nameInput}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.classNameInput}
        disabled={props.status}
        defaultValue={props.value}
      />
    </div>
  );
};

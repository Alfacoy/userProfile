import React from "react";
import style from "./style.module.scss";

const Button = ({ buttonValue, eventClick, variant }) => {
  return (
    <button
      className={`${style.btn} ${variant}`}
      value={buttonValue}
      onClick={eventClick}
    >
      {buttonValue}
    </button>
  );
};

export default Button;

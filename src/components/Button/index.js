import React from "react";
import "./style.css";

const Button = ({ buttonValue, eventClick }) => {
  return (
    <input
      className="btn"
      type="button"
      value={buttonValue}
      onClick={eventClick}
    />
  );
};

export default Button;

import React from "react";
import Github from "../assets/images/github.svg";
import Open from "../assets/images/open.png";
/* CSS in App.js as 'Card CSS' */
const Button = ({ title, name, type = "text", onPressButton }) => {
  return (
    <div>
      <button
        className="border-red border"
        name={name}
        type={type}
        id="showMore"
        onClick={() => onPressButton('Yes')}
      >
        {title}
      </button>
    </div>
  );
};
export default Button;

import React from "react";

const Button = ({ color, width, text,bg }) => {
  return <button className={`bg-${bg}`}>
    {text}
  </button>;
};

export default Button;

import React from "react";

const Button = ({ text, bg, radius, width, height, margin }) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        borderRadius: radius,
        width: width,
        height: height,
        marginRight: margin,
      }}
    >
      {text}
    </button>
  );
};

export default Button;

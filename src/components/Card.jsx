import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="w-[295px] mt-3">
      <img src={img} className="w-full h-[344]" alt="" />
      <div className="border border-black p-2">
        <h1 className="text-center">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

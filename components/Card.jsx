import React from "react";

const Card = ({ className, children }) => {
  return (
    <div
      className={
        className +
        " drop-shadow-sm hover:drop-shadow-md bg-white rounded p-3 m-2 border border-[#bfc3ca]"
      }
    >
      {children}
    </div>
  );
};

export default Card;

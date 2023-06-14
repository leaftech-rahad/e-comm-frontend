import React from "react";

const Card = ({ children }) => {
  return (
    <div className="drop-shadow-md hover:drop-shadow-xl bg-white rounded p-3 m-2 border border-[#bfc3ca]">
      {children}
    </div>
  );
};

export default Card;

import React from "react";

export const Button = ({
  button_text,
  className,
  type,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      className={" p-1 rounded  transition " + className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {button_text}
      {children}
    </button>
  );
};

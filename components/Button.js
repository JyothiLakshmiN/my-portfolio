import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <button onClick={onClick} className={`ml-4 px-3 py-1 rounded-lg bg-gray-100 font-medium text-sm ${isActive && "bg-gray-900 text-white"}`}>
      {name}
    </button>
  );
};

export default Button;

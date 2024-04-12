import React from 'react';

const Button = ({ color, children }) => {
  
  const defaultColor = "blue-500";
  
  const bgColor = color ? `bg-${color}` : `bg-${defaultColor}`;
  return (
    <button className={`px-6 py-2 text-white rounded-md shadow-md hover:${bgColor} focus:outline-none focus:${bgColor} ${bgColor}`}>
      {children}
    </button>
  );
}

export default Button;

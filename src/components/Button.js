import React from 'react'

const Button = ({ name,onClick }) => {
  return (
    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition duration-200 " onClick={onClick}>
      {name}
    </button>
  );
};

export default Button
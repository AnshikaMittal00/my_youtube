import React from 'react'

const Comment = ({ name, text }) => {
  return (
    
    <div className="flex gap-3 p-3 my-2 bg-gray-100 rounded-lg shadow-sm">
      <img
        className="w-10 h-10 rounded-full"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />

      <div>
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
import React from 'react'

const Comment = ({ name, text }) => {
return (
  <div className="flex gap-3 py-4 border-b border-gray-200">

    <img
      className="w-10 h-10 rounded-full object-cover"
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      alt="user"
    />

    <div className="flex-1">

      <h3 className="font-semibold text-sm text-gray-900">
        {name}
      </h3>

      <p className="text-sm text-gray-700 mt-1 break-words">
        {text}
      </p>

      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
        <button className="hover:text-black transition">
          👍
        </button>

        <button className="hover:text-black transition">
          👎
        </button>

        <button className="hover:text-black transition">
          Reply
        </button>
      </div>

    </div>

  </div>
);
};

export default Comment;
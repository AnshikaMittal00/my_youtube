import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
  <div className="fixed left-0 z-40 top-16 w-60 h-[calc(100vh-4rem)] bg-white shadow-md p-4 overflow-y-auto">

  
    <ul className="space-y-1 border-b pb-4">
      <Link to="/">
        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer font-medium">
          🏠 Home
        </li>
      </Link>

      <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
        🎬 Shorts
      </li>

      <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
        📹 Videos
      </li>

      <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
        🔴 Live
      </li>
    </ul>

  
    <div className="mt-5">
      <h1 className="font-semibold text-gray-700 px-4 mb-2">
        Subscriptions
      </h1>

      <ul className="space-y-1">
        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          🎵 Music
        </li>

        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          ⚽ Sports
        </li>

        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          🎮 Gaming
        </li>

        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          🎥 Movies
        </li>
      </ul>
    </div>

   
    <div className="mt-5">
      <h1 className="font-semibold text-gray-700 px-4 mb-2">
        Watch Later
      </h1>

      <ul className="space-y-1">
        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          ❤️ Liked Videos
        </li>

        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          📌 Saved
        </li>

        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          🕒 History
        </li>

        <li className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
          📂 Playlists
        </li>
      </ul>
    </div>

  </div>
);
}


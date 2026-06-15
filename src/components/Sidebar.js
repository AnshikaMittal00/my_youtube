import React from 'react'
import { useSelector } from 'react-redux';
export const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 m-2 shadow-lg w-48 '>
      <h1 className='font-bold'>subcriptions</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-4'>watch later </h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>Movies</li>
      </ul>
      
    </div>
  )
}


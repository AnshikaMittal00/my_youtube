import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

export const Head = () => {
  const dispatch=useDispatch();
  const handletoggle=()=>{
  dispatch(toggleMenu());
  };
  return (
    <><div className='grid  grid-flow-col p-5 m-2 shadow-lg'>
       <div className='flex col-span-1' >
      <img 
      onClick={()=>{handletoggle()}}
      className='h-8 cursor-pointer'
      alt="menu"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfphZIa7OK6g-U7p9ZTWyj6fh4TzL-O2A65OtKHMQqQ&s=10"></img>
      <img 
      className='h-10 mx-2'
       alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqz_-dfxxbIv3QkIavHIgnXScuA8sGLliJDGG56nhkYQJ2ZhWpxNJY-c&s=10"></img>
    </div>
    <div className='col-span-10'>
    <input type="text" className=' border border-gray-400 rounded-l-full w-1/2 mx-auto'/>
    <button className=' border border-gray-800 px-5  rounded-r-full bg-gray-100'>
      🔍
      </button>
    </div>
    <div className='col-span-1'>
      <img alt="user"
       className='h-8'
      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"/>
    </div>
    </div>
   
    </>
  )
}

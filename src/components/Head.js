import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { search_api } from './constants';
import { cacheApi } from '../utils/searchSlice';

export const Head = () => {
  const[searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([]);
  const[showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector(store=>store.search)
   const dispatch=useDispatch();
  useEffect(()=>{
    if(searchCache[searchQuery]){
      setShowSuggestions(searchCache[searchQuery])
    }
    else{
  const timer=setTimeout(()=> getSearchSuggestions(),3000);
  return()=>{ clearTimeout(timer)}

    }  
    
  },[searchQuery]);

  const getSearchSuggestions=async()=>{
     console.log(searchQuery)
  const data= await fetch(search_api+searchQuery);
  const json=await data.json();
  // console.log(json[1]);
  setSuggestions(json[1]);
  dispatch(cacheApi({
     [searchQuery]:json[1],
  }
   
  ))
  }
 
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
    <div className='col-span-10 relative'>
    <div className=''>
      <input type="text" value={searchQuery} className=' border border-gray-400 rounded-l-full w-1/2 mx-auto pl-4 ' 
    onChange={(e)=>setSearchQuery(e.target.value)}
    onFocus={()=>setShowSuggestions(true)}
    onBlur={()=>setShowSuggestions(false)}
    
    />
    <button className=' border border-gray-800 px-5  rounded-r-full bg-gray-100'>
      🔍
      </button>
       {showSuggestions&&<div className='absolute bg-white py-2 px-5 w-[10rem] md:w-[37rem] sm:w-[20rem] rounded-lg shadow-xl border border-gray-100 '>
        <ul>
          {suggestions && suggestions.map((s)=>(<li key={s} className='hover:bg-gray-100 py-2 rounded-lg cursor-pointer'>{s}</li>))}
        </ul>
      </div>
}
    </div>
       
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

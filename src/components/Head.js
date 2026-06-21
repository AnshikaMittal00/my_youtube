import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { search_api } from './constants';
import { cacheApi } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';


export const Head = () => {
  const navigate=useNavigate();
  const[searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([]);
  const[showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector(store=>store.search)
   const dispatch=useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    if(searchCache[searchQuery]){
      setShowSuggestions(searchCache[searchQuery])
    }
    else{
  const timer=setTimeout(()=> getSearchSuggestions(),2000);
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
  <>
    <div className="sticky top-0 z-50 bg-white shadow-md px-4 py-3">
      <div className="flex items-center justify-between gap-4">

       
        <div className="flex items-center gap-3">
          <img
            onClick={handletoggle}
            className="h-7 w-7 cursor-pointer hover:scale-110 transition"
            alt="menu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfphZIa7OK6g-U7p9ZTWyj6fh4TzL-O2A65OtKHMQqQ&s=10"
          />

         <img
  className="h-6 md:h-8 cursor-pointer"
  alt="logo"
  src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
/>
        </div>

    
        <div className="flex-1 flex justify-center relative">
          <div className="w-full max-w-2xl flex">

            <input
              type="text"
              value={searchQuery}
              className="w-full border border-gray-300 rounded-l-full px-5 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                setTimeout(() => {
                  setShowSuggestions(false);
                }, 2000);
              }}
              placeholder="Search"
            />

            <button
              className="border border-gray-300 px-6 rounded-r-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => navigate(`/search?q=${searchQuery}`)}
            >
              🔍
            </button>
          </div>

          {showSuggestions && (
            <div className="absolute top-12 w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              <ul>
                {suggestions &&
                  suggestions.map((s) => (
                    <li
                      key={s}
                      className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition"
                      onClick={() => {
                        setSearchQuery(s);
                        navigate(`/search?q=${s}`);
                      }}
                    >
                      🔍 {s}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

    
        <div>
          <img
            alt="user"
            className="h-10 w-10 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition"
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          />
        </div>

      </div>
    </div>
  </>
);
}

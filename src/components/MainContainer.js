import React from 'react'
import{ButtonList} from "./ButtonList";
import{VideoContainer} from "./VideoContainer";
import { useState } from 'react';
export const MainContainer = () => {
  const[selectedCategory,setSelectedCategory]=useState("All");
  return (
    <div className='col-span-11'>
      <ButtonList setSelectedCategory={setSelectedCategory}/>
      <VideoContainer selectedCategory={selectedCategory}/>
    </div>
  )
}

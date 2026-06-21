import React from 'react'
import { useState ,useMemo} from 'react';
import { PrimeMover } from '../utils/helpers';
const Demo = () => {
    const [input,setInput]=useState(0);
    const count= useMemo(()=>PrimeMover(input),[input]);
    const [isDark,setIsDark]=useState(false);
   
  return (
    <div className={'border border-black w-96 h-96 m-2 p-2 ' + (isDark && 'bg-gray-900 text-white')}>
       <div>
        <button className='border border-black p-2 mb-2 rounded-lg bg-green-300' onClick={()=>setIsDark(prev=>!prev)}>Theme</button>
       </div>
        <div>
            <input  className=" border border-black px-2" type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
       
       <h1>Prime number: {count}</h1>
        </div>

  )
}

export default Demo
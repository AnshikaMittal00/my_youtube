import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateNames, generateText } from '../utils/helpers';


const LiveChat = () => {
    const [input,setInput]=useState("");
    const ChatMessages=useSelector(store=>store.chat.messages)
    const dispatch=useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
       const i= setInterval(()=>{
          console.log("Api polling")
            dispatch(addMessage({
        name:generateNames(),
        message:generateText(20),
    }))
        },500);
        return(()=>clearInterval(i));
    },[dispatch]);
  
  return (
    <div>
    <div className=' w-full h-[600px] border border-xl border-black p-2 ml-4 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     
      {ChatMessages.map((c,index)=> <ChatMessage key={index} name={c.name} message={c.message}/>)}  
       
        </div>
        <form className='w-full p-2 ml-2 flex'onSubmit={(e) => {
  e.preventDefault();

  dispatch(
    addMessage({
      name: "Anshika",
      message: input,
    })
  );

  setInput("");
}
        }
        >
        <input className='w-96 px-2 mx-1 border border-black rounded-lg' type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button type="submit" className='w-20 px-2 mx-2 bg-green-300 rounded-lg'>Send</button>
       </form>
       </div>
        
  )
}

export default LiveChat
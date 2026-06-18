import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm rounded-lg m-2'>
        <img alt="user"
       className='h-8'
       src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"/>
    <span className='font-bold px-2'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default ChatMessage
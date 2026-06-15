import React from 'react'

const Button = (prop) => {
   const {name}=prop;
  return (
    <div> 
       < button className='px-5 py-2 m-5 bg-gray-200 rounded-lg'>{name}</button>
     </div>
  )
}

export default Button
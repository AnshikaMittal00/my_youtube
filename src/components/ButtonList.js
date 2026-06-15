import React from 'react'
import Button from './Button'

export const ButtonList = () => {
  const list=["All","Live","Gaming","cooking","skills","music"]
  return (
    <div className='flex overflow-x-auto whitespace-nowrap hide-scrollbar'>
{list.map((item) => (
  <Button key={item} name={item} />
))}
     
      
    </div>
  )
}

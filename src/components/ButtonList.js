import React from 'react'
import Button from './Button'

export const ButtonList = ({setSelectedCategory}) => {
 const list = [
  "All",
  "Live",
  "Gaming",
  "Music",
  "News",
  "Podcasts",
  "React",
  "JavaScript",
  "Cricket",
  "Coding",
  "Movies",
  "Cooking",
  "AI",
  "Recently Uploaded",
];
return (
  <div className="sticky top-16 z-20 bg-white px-2 py-3 flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide border-b">
    {list.map((item) => (
      <Button key={item} name={item} onClick={()=>setSelectedCategory(item)} />
    ))}
  </div>
);
}

import React from 'react'

const VideoCard = ({info}) => {

    //   console.log(info);
        if (!info) return <div>Loading...</div>;
      const{snippet,statistics }=info;
      const{channelTitle,title,thumbnails}=snippet;
  return (
  
    <div className='p-2 m-2 w-40 sm:w-52 md:w-72 shadow-lg rounded-lg  '>
        <img alt="Videos"src={thumbnails.medium.url}></img>
        <ul className='  '>
            <li className=' font-semibold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}views</li>
        </ul>
    </div>
  )
}
export const Ad=({info})=>{
    const Adinfo=[{
         ...info,
        snippet:{
            ...info.snippet,
            title:"Sponsored Ad",
        }
    }
        
    ]
       

    
return(
     <div className=' h-full border border-red-400' >
        <VideoCard info={Adinfo[0]}/>
     </div>
)
   

};

export default VideoCard
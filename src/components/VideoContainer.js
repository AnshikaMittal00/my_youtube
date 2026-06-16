import React, { useEffect, useState } from 'react'
import { video_api } from './constants';
import VideoCard ,{Ad}from './VideoCard';
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos=async()=>{
    const data=await fetch(video_api);
    const json=await data.json();
    console.log(json?.items);
    setVideos(json.items);
  }
  return (
    <div className='flex m-5 justify-centre flex-wrap'>
    {videos[0] && <Ad info={videos[0]}/>}  
      {videos.map((video)=>(
        <Link to={`/watch?v=${video.id}`}>
         <VideoCard key={video.id} info={video}/>
        </Link>
       
        ))}
    </div>
  )
}

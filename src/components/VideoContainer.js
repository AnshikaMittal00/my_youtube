import React, { useEffect, useState } from 'react'
import { video_api } from './constants';
import VideoCard from './VideoCard';

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
    <div>
      <VideoCard info={videos[0]}/>
    </div>
  )
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { search_videos, video_api } from './constants';
import VideoCard ,{Ad}from './VideoCard';
import { Link } from "react-router-dom";

export const VideoContainer = ({selectedCategory}) => {
  console.log(selectedCategory);
  const [videos,setVideos]=useState([]);
  const[nextPageToken,setNextPageToken]=useState("");
  const[loading,setLoading]=useState(false);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    const handleScroll=()=>{
    console.log("scrolling");
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200){
      fetchMoreVideos();
    }
  }
    const getVideos=async()=>{
    let data;
    if(selectedCategory==="All"){
        data=await fetch(video_api);
    }
    else{
      data=await fetch(search_videos+"&q="+selectedCategory);
    }
   
    const json=await data.json();
    console.log(json);
    setVideos(json.items);
    setNextPageToken(json.nextPageToken) 
  }
    getVideos();
    window.addEventListener("scroll",handleScroll);
    return()=>{window.removeEventListener("scroll",handleScroll)}
  },[selectedCategory]);

  const fetchMoreVideos=async()=>{
     if(loading || !nextPageToken) return;
     setLoading(true);
      let data;

  if (selectedCategory === "All") {
    data = await fetch(
      video_api + "&pageToken=" + nextPageToken
    );
  } else {
    data = await fetch(
      search_videos +
      "&q=" +
      selectedCategory +
      "&pageToken=" +
      nextPageToken
    );
  }
    const json=await data.json();
    setVideos((prev)=>[...prev,...json.items]);
    setNextPageToken(json.nextPageToken);
    setLoading(false);
  }
 return (
   <div className=" p-6">
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
      "
    >
      {videos[0] && <Ad info={videos[0]} />}

      { videos.map((video) => (
        <Link
          key={video.id}
          to={`/watch?v=${video.id}`}
          className="w-full"
        >
          <VideoCard info={video} />
        </Link>
      ))}
      {selectedCategory!=="All"&&videos.map((video) => (
        <Link
          key={video.id.videoId}
          to={`/watch?v=${video.id.videoId}`}
          className="w-full"
        >
          <VideoCard info={video} />
        </Link>
      )) }
    </div>


    {loading && (
      <div className="flex justify-center py-8">
        <div className="text-lg font-medium text-gray-500">
          Loading more videos...
        </div>
      </div>
    )}
  </div>
);
}

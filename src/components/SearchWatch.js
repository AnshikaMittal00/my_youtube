import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { search_videos} from './constants';
import SearchVideoCard from './SearchVideoCard';
import { Link } from 'react-router-dom';

const SearchWatch = () => {
    const [searchParam]=useSearchParams();
    const[searchVideos,setSearchVideos]=useState([]);
    const query=searchParam.get("q");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
       const fetchData=async()=>{
    const data=await fetch(search_videos+"&q="+query);
    const json=await data.json();
    // console.log(json);
    setSearchVideos(json.items);


    }
        fetchData();
    },[query])
   
  return (
    <div>
    {searchVideos.map((item,index)=><Link key={item.id.videoId} to={`/watch?v=${item.id.videoId}`}><SearchVideoCard data={item}/></Link>)}
      
    </div>
  )
}

export default SearchWatch
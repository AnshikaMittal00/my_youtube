import  { useEffect, useState } from 'react'
import { comment_api } from '../components/constants'


const useComments = (vedio_id) => {
    const[commentsList,setcommentsList]=useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
      commentApi();
    },[])
    const commentApi=async()=>{
        const data=await fetch(`${comment_api}&videoId=${vedio_id}`);
        const json=await data.json();
        console.log(json);
        setcommentsList(json.items);

    }
  return [commentsList];
}

export default useComments
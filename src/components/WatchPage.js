import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import useComments from '../utils/useComments';
import Comment from './Comment';
const WatchPage = () => {
  const [searchParams]=useSearchParams();
  const video_id=searchParams.get("v");
  const [commentsList]=useComments(video_id);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

  return (
    <div className='px-5 grid grid-flow-col '>
        <div className='col-span-3'>
            <iframe width="1200" height="600" 
      src={"https://www.youtube.com/embed/"+ video_id}
      title="YouTube video player"
       frameoBrder="0" 
       allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  

        
        <h1 className='font-bold m-5 f text-xl'>Comments</h1> 
               
             {commentsList.map((comment)=>{
                const{authorDisplayName, textDisplay}=comment.snippet.topLevelComment.snippet;
                return(
              <Comment
              key={comment.id}
               name={authorDisplayName} text={textDisplay}  />
                )

            })}
            
        </div>
     
    </div>

  )
}

export default WatchPage
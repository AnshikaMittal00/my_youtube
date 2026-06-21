import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
const WatchPage = () => {
  const [searchParams]=useSearchParams();
  const video_id=searchParams.get("v");
  
    const dispatch=useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        dispatch(closeMenu());
    },[dispatch]);

  return (
  <div className="w-full px-4 md:px-6 py-4">

    <div className="flex flex-col xl:flex-row gap-6">

      <div className="flex-1">

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/" + video_id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

      </div>

   
      <div className="xl:w-[380px] w-full">
        <div className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white">
          <div className="px-4 py-3 border-b font-semibold">
            Live Chat
          </div>

          <LiveChat />
        </div>
      </div>

    </div>

  
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Comments
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-4">
        <CommentContainer />
      </div>
    </div>

  </div>
);
}

export default WatchPage
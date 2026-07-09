import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const video_id = searchParams.get("v");

  const dispatch = useDispatch();

  // Read initial state from localStorage
  const [liked, setLiked] = useState(() => {
    return JSON.parse(localStorage.getItem(`${video_id}_liked`)) || false;
  });

  const [likes, setLikes] = useState(() => {
    return JSON.parse(localStorage.getItem(`${video_id}_likes`)) || 100;
  });

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // If user opens another video, load its saved state
  useEffect(() => {
    setLiked(
      JSON.parse(localStorage.getItem(`${video_id}_liked`)) || false
    );

    setLikes(
      JSON.parse(localStorage.getItem(`${video_id}_likes`)) || 100
    );
  }, [video_id]);

  const handleLike = () => {
    const updatedLiked = !liked;
    const updatedLikes = updatedLiked ? likes + 1 : likes - 1;

    setLiked(updatedLiked);
    setLikes(updatedLikes);

    localStorage.setItem(
      `${video_id}_liked`,
      JSON.stringify(updatedLiked)
    );

    localStorage.setItem(
      `${video_id}_likes`,
      JSON.stringify(updatedLikes)
    );
  };

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

          {/* Like Section */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handleLike}
              className={`px-5 py-2 rounded-lg text-white transition ${
                liked
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
            >
              {liked ? "❤️ Liked" : "🤍 Like"}
            </button>

            <span className="text-lg font-semibold">
              👍 {likes} Likes
            </span>
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

      {/* Comments */}
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
};

export default WatchPage;
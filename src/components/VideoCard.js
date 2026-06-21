import React from 'react'

const VideoCard = ({info}) => {

    //   console.log(info);
        if (!info) return <div>Loading...</div>;
      const{snippet}=info;
      const{channelTitle,title,thumbnails}=snippet;

  
    return (
  <div className="w-full rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
    <img
      alt="Videos"
      src={thumbnails.medium.url}
      className="w-full rounded-xl object-cover"
    />

    <div className="mt-3 px-1">
      <h3 className="font-semibold text-sm md:text-base line-clamp-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mt-1">
        {channelTitle}
      </p>

      {info?.statistics&&<p className="text-gray-500 text-sm">
        {Number(info.statistics.viewCount).toLocaleString()} views
      </p>
}
    </div>
  </div>
);
  
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
       

    
return (
  <div className="relative rounded-xl border-2 border-yellow-400 p-2 bg-yellow-50">
    
    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
      Sponsored
    </span>

    <VideoCard info={Adinfo[0]} />
  </div>
);
   

};

export default VideoCard
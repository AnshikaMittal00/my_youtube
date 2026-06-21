import React from 'react'

const SearchVideoCard = ({data}) => {
   console.log(data);
        if (!data) return <div>Loading...</div>;
      const{snippet }=data;
    //   console.log(snippet);
      const{channelTitle,title,thumbnails}=snippet;
  return (
 <div className="flex gap-4 p-4 rounded-lg hover:bg-gray-100 cursor-pointer">
  <img
    className="w-[400px] h-[220px] rounded-xl object-cover"
    alt="video"
    src={thumbnails.high.url}
  />

  <div className="flex flex-col">
    <h1 className="text-lg font-semibold line-clamp-2">
      {title}
    </h1>

    <p className="text-sm text-gray-600 mt-2">
      {channelTitle}
    </p>

    <p className="text-sm text-gray-500 mt-3">
      {snippet.description}
    </p>
  </div>
</div>
  )
}

export default SearchVideoCard
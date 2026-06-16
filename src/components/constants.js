const api_key="AIzaSyA_fy0ztGzwvkggeDKMFyfyaUgLnsJ0rmE"
export const video_api= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  api_key;
export const comment_api= "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" +
  api_key;
export const search_api="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
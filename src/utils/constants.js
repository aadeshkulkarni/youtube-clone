const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
export const OFFSET_LIVE_CHAT = 10;
export const YOUTUBE_MOVIE_LIST_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+YOUTUBE_API_KEY
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
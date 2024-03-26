const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const OFFSET_LIVE_CHAT = 10;
export const YOUTUBE_MOVIE_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=40&key=" + YOUTUBE_API_KEY;
export const YOUTUBE_MOVIE_DETAIL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=id%2Cstatistics%2Csnippet&id=[VIDEO_ID]&key=" + YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API = "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=");
export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=[VIDEO_ID]&maxResults=500&key=" + YOUTUBE_API_KEY;
export const YOUTUBE_RECOMMENDATION_MOVIE_LIST_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&maxResults=50&key=" + YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_BY_KEYWORD_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[QUERY]&key=" + YOUTUBE_API_KEY;
export const YOUTUBE_CHANNEL_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCp_r6Z-Oh0YTf-ym71z5Nqg&key=" + YOUTUBE_API_KEY;

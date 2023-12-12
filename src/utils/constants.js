export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
export const X_RapidAPI_Key = process.env.X_RapidAPI_Key;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_WATCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="

export const ID_KEY = "&key=" + GOOGLE_API_KEY;

export const YOUTUBE_AUTOCOMPLETE_API = "https://clients1.google.com/complete/search?client:=youtube&hl=en&ds=yt&q="
  // "https://www.google.com/complete/search?client=firefox&q=";

export const YOUTUBE_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDaajN0jChgIgEHwUkVTbzs3x40R4gMm2A&textFormat=plainText&maxResults=50&part=snippet&videoId="


export const YOUTUBE_SEARCH_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDaajN0jChgIgEHwUkVTbzs3x40R4gMm2A&q="

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SuggestedVideoCard from "./SuggestedVideoCard";
import { X_RapidAPI_Key } from "../utils/constants";

function SuggestedVideos() {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const videoId = searchParams.get("v");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://yt-api.p.rapidapi.com/related?id=" + videoId;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": X_RapidAPI_Key,
        "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.data[0]);
      setVideos(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {videos.map((video) => (
        <SuggestedVideoCard key={video.videoId} info={video} />
      ))}
    </div>
  );
}

export default SuggestedVideos;

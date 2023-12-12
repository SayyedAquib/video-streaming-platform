import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import {
  YOUTUBE_SEARCH_VIDEOS_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import ButtonsContext from "../utils/ButtonsContext";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const { text } = useContext(ButtonsContext);

  useEffect(() => {
    getVideos();
  }, [text]);

  const getVideos = async () => {
    try {
      const response = await fetch(
        text === "All" ? YOUTUBE_VIDEOS_API : YOUTUBE_SEARCH_VIDEOS_API + text
      );
      // const response = await fetch(YOUTUBE_VIDEOS_API);

      if (!response.ok) {
        throw new Error(`Failed to fetch videos, status: ${response.status}`);
      }

      const json = await response.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
      // Handle the error as needed, e.g., show an error message to the user
    }
  };

  if (!videos.length) return <ShimmerUI />;

  return (
    <div className="flex flex-wrap mt-[10px]">
      {videos.map((video, i) => (
        <Link
          key={i}
          to={"/watch?v=" + (text === "All" ? video.id : video.id.videoId)}
        >
          <VideoCard
            key={text === "All" ? video.id : video.id.videoId}
            info={video}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

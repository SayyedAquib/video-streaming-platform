import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { ID_KEY, YOUTUBE_WATCH_VIDEO_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import SuggestedVideos from "./SuggestedVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [detail, setDetail] = useState('')

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getWatchVideoData();
  }, []);

  const getWatchVideoData = async () => {
    const data = await fetch(YOUTUBE_WATCH_VIDEO_API + searchParams.get("v") + ID_KEY)
    const json = await data.json();
    console.log(json.items);
    setDetail(json.items)
  }

  return (
    <div className="flex ml-16 w-full mt-16">
      <div>
        <div className="m-5 max-w-[950px] mx-auto">
          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64 md:h-96"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <p className="font-bold text-xl line-clamp-2 my-2">
              {detail[0]?.snippet?.title}
            </p>
            <div className="flex mb-2 justify-between">
              <div className="flex">
                <p className="text-lg text-gray-600 my-2 mr-2">
                  {detail[0]?.snippet?.channelTitle}
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center my-2">
                <button className="mr-2 flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-1 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  {detail[0]?.statistics?.likeCount}
                </button>
                <button className="mr-2 flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-1 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 6l12 12M6 18L18 6"
                    ></path>
                  </svg>
                  {detail[0]?.statistics?.dislikeCount}
                </button>
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <span className="mr-2 font-bold">
                {detail[0]?.statistics?.viewCount} views
              </span>
              <span>{detail[0]?.snippet?.publishedAt}</span>
              <p className="line-clamp-3 text-sm">
                {detail[0]?.snippet?.description}
              </p>
            </div>
          </div>
        </div>

        <CommentsContainer videoId={searchParams.get("v")} />
      </div>
      <SuggestedVideos />
    </div>
  );
};

export default WatchPage;
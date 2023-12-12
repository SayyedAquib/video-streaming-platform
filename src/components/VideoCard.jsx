import React from "react";

function VideoCard({ info }) {
  // const event = new Date(info?.snippet?.publishedAt);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  if (info?.id?.kind === "youtube#channel") return;

  return (
    <>
      <div className="m-2 w-80 h-72 overflow-hidden shadow-lg rounded-lg p-2 ">
        <img
          className="rounded-lg object-contain"
          alt="thumbnail"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-bold line-clamp-2 my-2">
            {info?.snippet?.title}
          </li>
          <li className="text-gray-500 text-sm ">
            {info?.snippet?.channelTitle}
          </li>
          <li className="text-gray-500 text-sm ">
            {info?.statistics?.viewCount} views |{" "}
            {formatDate(info?.snippet?.publishedAt)}
          </li>
        </ul>
      </div>
    </>
  );
}

export default VideoCard;

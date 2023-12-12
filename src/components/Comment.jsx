import React, { useState, useEffect } from 'react';

function Comment({ data }) {

  return (
    <div className='flex shadow-sm dark:bg-gray-800 text-white ml-4 p-4 rounded-lg my-4 w-[950px]'>
      <div className='w-12 h-12 mr-4'>
        <img
          className='object-cover rounded-full'
          src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt="User Profile"
        />
      </div>
      <div className='flex-1'>
        <div className="flex items-center mb-2">
          <p className={`font-bold text-lg mr-2 dark:text-gray-300 text-black`}>
            {data?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </p>
          <span className={`text-sm dark:text-gray-500 text-gray-600`}>
            {formatDate(data?.snippet?.topLevelComment?.snippet?.publishedAt)}
          </span>
        </div>
        <p className='dark:text-gray-300 text-gray-800 line-clamp-2'>
          {data?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default Comment;

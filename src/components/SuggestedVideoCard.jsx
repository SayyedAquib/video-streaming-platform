import React from 'react'
import { Link } from 'react-router-dom'

function SuggestedVideoCard({ info }) {
  return (
    <>
      <Link 
        to={"/watch?v=" + info?.videoId}>
        <div className='my-2 w-full shadow-lg rounded-lg p-1 flex'>
          <img
            className='rounded-lg object-contain'
            alt='thumbnail'
            src={info?.thumbnail[0]?.url}
          />
          <ul className='mx-2'>
            <li className='font-bold text-sm line-clamp-2 mb-2'>{info?.title}</li>
            <li className='text-gray-500 text-sm '>{info?.channelTitle}</li>
            <li className='text-gray-500 text-sm '>{info?.viewCount} views | {info?.publishedTimeText}</li>
          </ul>
        </div>
       </Link>
    </>
  )
}

export default SuggestedVideoCard
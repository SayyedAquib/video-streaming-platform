import React from 'react'

function SearchVideoCard({ info }) {

  const event = new Date(info?.snippet?.publishTime);

  return (
    <div className='p-2 m-2 shadow-lg rounded-lg flex'>
      <img
        className='rounded-lg w-auto h-[100%] object-fill'
        alt='thumbnail'
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul className='grid row-span-3'>
        <li className='text-xl line-clamp-2 ml-2'>{info?.snippet?.title}</li>
        <li className='ml-2 text-sm'>{event.toLocaleString()}</li>
        <li className='ml-2 my-2'>{info?.snippet?.channelTitle}</li>
        <li className='ml-2 text-sm'>{info?.snippet?.description}</li>
      </ul>
    </div>
  )
}

export default SearchVideoCard
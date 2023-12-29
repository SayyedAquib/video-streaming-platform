import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import SearchVideoCard from './SearchVideoCard';

function ResultsPage() {
  const [params] = useSearchParams()
  const search_query = params.get("search_query")

  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    getSearchResults()
  }, [search_query]);

  const getSearchResults = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDaajN0jChgIgEHwUkVTbzs3x40R4gMm2A&q=${search_query}`
    );
    const data = await response.json();
    setSearchVideos(data.items);
  };

  return (
    <div className='mt-20 flex flex-col mx-auto w-[1098px] h-[201px]'>
      {searchVideos?.map((searchVideo) => (
        <Link
          key={searchVideo.id.videoId}
          to={"/watch?v=" + searchVideo.id.videoId}>
            <SearchVideoCard info={searchVideo} />
        </Link>
      ))}
    </div>
  )
}

export default ResultsPage

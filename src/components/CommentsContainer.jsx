import React, {useEffect, useState} from 'react'
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import Comment from './Comment';

function CommentsContainer({ videoId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, [])

  const getCommentsData = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + videoId)
    const json = await data.json();
    setComments(json.items)
  }

  return (
    <div>
      <h1 className='font-bold text-xl ml-5'>{comments.length} Comments </h1>
      {comments.map((comment) => <Comment key={comment.id} data={comment} />)}
    </div>
  )
}

export default CommentsContainer
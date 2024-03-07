import React from 'react'
import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();
  return (
    <div>
      ID: {id}
    </div>
  )
}

export default PostPage

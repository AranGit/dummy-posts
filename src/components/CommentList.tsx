import { useContext } from 'react'
import { PostContext } from '../contexts/PostProvider';
import Loading from './Loading';
import ErrorWithMessage from './ErrorWithMessage';
import CommentCard from './cards/CommentCard';

function CommentList() {
  const post = useContext(PostContext);
  const comments = post?.data && (
    post.getComments(post.data.id.toString())
  );

  return (
    <div>
      {comments?.isPending ? <Loading /> :
        comments?.error ? <ErrorWithMessage message={comments.error.message} /> :
          (comments?.data &&
            comments.data.map((commentData, index) =>
              <div className='mt-4' key={`comment-card${index}`}>
                <CommentCard data={commentData} />
              </div>
            )
          )
      }
    </div>
  )
}

export default CommentList

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
            <div className='flex flex-col gap-4 pt-5 pb-10 pl-2' >
              {comments.data.map((commentData, index) =>
                <CommentCard key={`comment-card${index}`} data={commentData} />
              )}
            </div>
          )
      }
    </div>
  )
}

export default CommentList

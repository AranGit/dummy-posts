import { useContext } from 'react'
import { PostContext } from '../contexts/PostProvider';
import Loading from './Loading';
import ErrorWithMessage from './ErrorWithMessage';

function PostCard() {
  const post = useContext(PostContext);

  return (
    <div className='p-[24px] rounded-[16px] drop-shadow bg-white max-w-[1200px]'>
      {
        post?.isPending ? <Loading /> :
          post?.error ? <ErrorWithMessage message={post.error.message} /> :
            (post?.data &&
              <>
                <h2>{post.data.title}</h2>
                <p>{post.data.body}</p>
              </>
            )
      }
    </div>
  )
}

export default PostCard

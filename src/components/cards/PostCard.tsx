import { useContext } from 'react'
import Loading from '../Loading';
import ErrorWithMessage from '../ErrorWithMessage';
import { PostContext } from '../../contexts/PostProvider';
import PostContent from '../PostContent';

function PostCard() {
  const post = useContext(PostContext);

  return (
    <div className='p-[24px] rounded-[16px] drop-shadow bg-white max-w-[1200px]'>
      {
        post?.isPending ? <Loading /> :
          post?.error ? <ErrorWithMessage message={post.error.message} /> :
            (post?.data &&
              <PostContent data={post.data} />
            )
      }
    </div>
  )
}

export default PostCard

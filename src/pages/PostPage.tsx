import { useParams } from 'react-router-dom';
import PostProvider from '../contexts/PostProvider';
import PostCard from '../components/PostCard';

function PostPage() {
  const { id } = useParams();

  return (
    <div>
      <PostProvider id={id}>
        <PostCard />
      </PostProvider>
    </div>
  )
}

export default PostPage

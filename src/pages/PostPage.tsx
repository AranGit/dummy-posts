import { useParams } from 'react-router-dom';
import PostProvider from '../contexts/PostProvider';
import PostCard from '../components/cards/PostCard';
import PageLayout from '../components/layouts/PageLayout';

function PostPage() {
  const { id } = useParams();

  return (
    <PageLayout>
      <PostProvider id={id}>
        <PostCard />
      </PostProvider>
    </PageLayout>
  )
}

export default PostPage

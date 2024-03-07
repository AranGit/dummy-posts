import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPostById } from '../apis/jsonPlaceholderEndpoints';
import { useEffect } from 'react';

interface PostData {
  id: number,
  userId: number,
  title: string,
  body: string
}

interface PostDataError {
  message: string
}

function PostPage() {
  const { id } = useParams();

  const { isPending, error, data } = useQuery<PostData, PostDataError>({
    queryKey: ['postData', id],
    queryFn: async () => {
      try {
        return id ? await getPostById(id) : undefined;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    },
  })

  if (isPending) return 'Loading...'

  if (error) return `An error has occurred: ${error.message}`

  return (
    <div>
      <h1><b>{data.title}</b></h1>
      <p>{data.body}</p>
    </div>
  )
}

export default PostPage

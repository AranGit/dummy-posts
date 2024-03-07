import { PostData } from '../datas/postData';
import CommentList from './CommentList';

function PostContent({ data }: { data: PostData }) {
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <CommentList />
    </>
  )
}

export default PostContent

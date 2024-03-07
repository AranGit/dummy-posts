import { PostData } from '../datas/postData';

function PostContent({ data }: { data: PostData }) {
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  )
}

export default PostContent

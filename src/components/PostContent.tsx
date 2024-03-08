import { PostData } from '../datas/postData';
import CommentList from './CommentList';

function PostContent({ data }: { data: PostData }) {
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <CommentList />
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-400 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Textarea"
      />
    </>
  )
}

export default PostContent

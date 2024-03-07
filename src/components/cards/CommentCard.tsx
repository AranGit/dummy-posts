import { CommentData } from "../../datas/commentData"


function CommentCard({ data }: { data: CommentData }) {
  return (
    <div>
      <b>{data.email}</b>
      <p>{data.body}</p>
    </div>
  )
}

export default CommentCard

import { CommentData } from "../../datas/commentData"
import TextCollapse from "../TextCollapse"

function CommentCard({ data }: { data: CommentData }) {
  return (
    <div className="bg-white drop-shadow p-5 rounded-lg">
      <b>{data.email}</b>
      <TextCollapse text={data.body} />
    </div>
  )
}

export default CommentCard

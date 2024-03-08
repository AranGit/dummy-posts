import { CommentData } from "../../datas/commentData"
import TextCollapse from "../TextCollapse"


function CommentCard({ data }: { data: CommentData }) {
  return (
    <div>
      <b>{data.email}</b>
      <TextCollapse text={data.body} />
    </div>
  )
}

export default CommentCard

import { CommentData } from "../../datas/commentData"
import TextCollapse from "../TextCollapse"
import UserAvatar from "../UserAvatar"

function CommentCard({ data }: { data: CommentData }) {
  return (
    <div className="flex flex-row flex-wrap gap-4 bg-white drop-shadow p-5 rounded-lg">
      <div>
        <UserAvatar displayName={data.email} />
      </div>
      <div className="grid grow shrink basis-[300px]">
        <b className="my-2">{data.email}</b>
        <TextCollapse text={data.body} />
      </div>
    </div>
  )
}

export default CommentCard

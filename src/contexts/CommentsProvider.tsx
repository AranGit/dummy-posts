import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { getCommentsByPostId } from "../apis/jsonPlaceholderEndpoints";
import { CommentData } from "../datas/commentData";


export type CommentsContextValue = {
  isPending: boolean,
  error: Error | null,
  data: CommentData[] | undefined,
}

const defaultCommentsContextValue: CommentsContextValue = {
  isPending: false,
  error: null,
  data: undefined,
}

export const CommentsContext = createContext<CommentsContextValue>(defaultCommentsContextValue);

function CommentsProvider({ postId, children }: { postId: string | undefined, children: React.ReactNode }) {

  const { isPending, error, data } = useQuery<CommentData[]>({
    queryKey: ['commentData', postId],
    queryFn: async () => {
      try {
        return postId ? await getCommentsByPostId(postId) : undefined;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    },
  })

  const value = {
    isPending,
    error,
    data,
  }

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  )
}

export default CommentsProvider

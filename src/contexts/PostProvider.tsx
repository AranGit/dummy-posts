import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { PostData } from "../datas/postData";
import { getCommentsByPostId, getPostById } from "../apis/jsonPlaceholderEndpoints";
import { CommentData } from "../datas/commentData";

export type PostContextValue = {
  isPending: boolean,
  error: Error | null,
  data: PostData | undefined,
  getComments: (postId: string) => UseQueryResult<CommentData[], Error>
}

const defaultPostContextValue: PostContextValue = {
  isPending: false,
  error: null,
  data: undefined,
  getComments: () => {
    throw new Error();
  }
}

export const PostContext = createContext<PostContextValue>(defaultPostContextValue);

function PostProvider({ id, children }: { id: string | undefined, children: React.ReactNode }) {

  const { isPending, error, data } = useQuery<PostData>({
    queryKey: ['postData', id],
    queryFn: async () => {
      try {
        return id ? await getPostById(id) : new Error("Post ID can't be undefind");
      } catch (error) {
        throw new Error('Failed to fetch post data');
      }
    },
  })

  const GetComments = (postId: string) => {
    return useQuery<CommentData[]>({
      queryKey: ['commentsData', postId],
      queryFn: async () => {
        try {
          return getCommentsByPostId(postId);
        } catch (error) {
          throw new Error('Failed to fetch comments data');
        }
      },
    })
  }

  const value = {
    isPending,
    error,
    data,
    getComments: GetComments
  }

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider

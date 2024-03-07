/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { PostData } from "../datas/postData";
import { getPostById } from "../apis/jsonPlaceholderEndpoints";


export type PostContextValue = {
  isPending: boolean,
  error: Error | null,
  data: PostData | undefined,
}

const defaultPostContextValue: PostContextValue = {
  isPending: false,
  error: null,
  data: undefined,
}

export const PostContext = createContext<PostContextValue>(defaultPostContextValue);

function PostProvider({ id, children }: { id: string | undefined, children: React.ReactNode }) {

  const { isPending, error, data } = useQuery<PostData>({
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

  const value = {
    isPending,
    error,
    data,
  }

  let content = children;

  if (isPending) {
    content = <>'Loading...'</>
  }

  if (error) {
    content = <>`An error has occurred: ${error.message}`</>
  }

  return (
    <PostContext.Provider value={value}>
      {content}
    </PostContext.Provider>
  )
}

export default PostProvider

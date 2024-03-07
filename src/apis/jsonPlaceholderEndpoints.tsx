import axios from 'axios'

const baseAPIUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = `${baseAPIUrl}/posts`;
const getPostsUrlById = (id: string) => `${postsUrl}/${id}`;

export const getPostById = async (id: string) => {
  return await axios
    .get(getPostsUrlById(id))
    .then((res) => res.data)
}

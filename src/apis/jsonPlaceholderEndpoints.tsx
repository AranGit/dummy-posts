import axios from 'axios'

const baseAPI_Url = 'https://jsonplaceholder.typicode.com';
const posts_Url = `${baseAPI_Url}/posts`;
const getPostById_Url = (id: string) => `${posts_Url}/${id}`;
const getCommentsByPostId_Url = (id: string) => `${getPostById_Url(id)}/comments`;

export const getPostById = async (id: string) => {
  return await axios
    .get(getPostById_Url(id))
    .then((res) => res.data)
}

export const getCommentsByPostId = async (id: string) => {
  return await axios
    .get(getCommentsByPostId_Url(id))
    .then((res) => res.data)
}

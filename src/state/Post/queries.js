import axios from '../../utils/axios'

export const getPosts = () => {
  return axios()
    .get('/posts')
    .then(res => res.data)
    .catch(err => err.response.data)
};

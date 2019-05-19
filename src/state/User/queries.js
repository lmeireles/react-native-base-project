import axios from '../../utils/axios'

export const currentUser = () => {
  return axios()
    .get('/login/1')
    .then(res => res.data)
    .catch(err => err.response.data)
};

export const login = credentials => {
  return axios()
    .post('/login', credentials)
    .then(res => res.data)
    .catch(err => err.response.data)
};

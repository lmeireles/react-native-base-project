export const REQUEST_POSTS = 'post/REQUEST_POSTS';
export const FAIL_POSTS = 'post/FAIL_POSTS';
export const SET_POSTS = 'post/SET_POSTS';

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const setPosts = payload => ({
  type: SET_POSTS,
  payload
});

export const failPosts = payload => ({
  type: FAIL_POSTS,
  payload
});

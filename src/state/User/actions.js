export const SET_USER = 'user/SET_USER';
export const CLEAR_USER = 'user/CLEAR_USER';

export const setUser = payload => ({
  type: SET_USER,
  payload
});

export const clearUser = () => ({
  type: SET_USER
});

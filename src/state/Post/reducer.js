import {FAIL_POSTS, REQUEST_POSTS, SET_POSTS} from "./actions";

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        loading: true
      };
    case FAIL_POSTS:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SET_POSTS:
      return {
        ...initialState,
        list: action.payload
      };
    default:
      return state;
  }
};

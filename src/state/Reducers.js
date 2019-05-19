import userReducer from './User/reducer';
import postReducer from './Post/reducer';

export default ({ user, posts }, action) => ({
  user: userReducer(user, action),
  posts: postReducer(posts, action)
});

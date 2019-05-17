import userReducer from './User/reducer';
import postReducer from './Post/reducer';

export default ({ user, music }, action) => ({
  user: userReducer(user, action),
  basket: postReducer(music, action)
});

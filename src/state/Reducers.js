import userReducer from './User/reducer';
import musicReducer from './Music/reducer';

export default ({ user, music }, action) => ({
  user: userReducer(user, action),
  basket: musicReducer(music, action)
});

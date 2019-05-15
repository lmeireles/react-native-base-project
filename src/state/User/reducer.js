import {CLEAR_USER, SET_USER} from "./actions";

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};

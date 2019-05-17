import {CLEAR_USER, SET_USER} from "./actions";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

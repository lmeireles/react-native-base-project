export default (state, action) => {
  switch (action.type) {
    case 'post':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default (state, action) => {
  switch (action.type) {
    case 'music':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

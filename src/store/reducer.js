const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_SIZE":
      console.log(action);
      return {
        ...state,
        userSize: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;

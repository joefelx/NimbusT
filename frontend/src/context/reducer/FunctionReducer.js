const FunctionReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "RESET_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET_SHOW":
      return {
        ...state,
        show: action.payload,
      };

    default:
      break;
  }
};

export default FunctionReducer;

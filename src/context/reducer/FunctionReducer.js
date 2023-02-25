const FunctionReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };
    case "SET_THREAD":
      return {
        ...state,
        threads: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_COMPLETE":
      return {
        ...state,
        loading: false,
        complete: true,
      };
    case "REMOVE_COMPLETE":
      return {
        ...state,
        complete: false,
      };
    case "SET_SHOW":
      return {
        ...state,
        show: action.payload,
      };
    case "SET_EXPAND":
      return {
        ...state,
        expand: action.payload,
      };

    default:
      break;
  }
};

export default FunctionReducer;

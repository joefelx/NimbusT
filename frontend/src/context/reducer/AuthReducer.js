const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_LOGGEDIN":
      return {
        user: action.payload,
        error: false,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        error: true,
      };
    case "AUTH_LOGGEDOUT":
      return {
        user: null,
        ...state,
      };
    default:
      break;
  }
};

export default AuthReducer;

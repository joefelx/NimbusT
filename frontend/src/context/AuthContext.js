import { createContext, useReducer } from "react";
import AuthReducer from "./reducer/AuthReducer";
import { getTokenData } from "../utils/getTokenData";

const INITIAL_STATE = {
  user: null,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  function logout() {
    try {
      window.localStorage.removeItem("USER_ACCOUNT");
      dispatch({ type: "AUTH_LOGGEDOUT" });
      checkUser();
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE" });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        dispatch,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

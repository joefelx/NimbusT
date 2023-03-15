import { createContext, useContext, useReducer, useState } from "react";
import AuthReducer from "./reducer/AuthReducer";

const INITIAL_STATE = {
  user: null,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  // const { setShow } = useContext(FunctionContext);

  async function checkUser() {
    const storedUser = window.localStorage.getItem("USER_ACCOUNT");
    try {
      storedUser &&
        dispatch({
          type: "AUTH_LOGGEDIN",
          payload: JSON.parse(storedUser),
        });
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE" });
    }
  }

  function logout() {
    try {
      window.localStorage.removeItem("USER_ACCOUNT");
      dispatch({ type: "AUTH_LOGGEDOUT" });
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE" });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        checkUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

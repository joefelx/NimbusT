import { createContext, useContext, useState } from "react";
import axios from "axios";
import { FunctionContext } from "./FunctionContext";

// const initial_state = {
//   user: null,
// };

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { setShow } = useContext(FunctionContext);

  async function checkUser() {
    try {
      if (!user) {
        const data = window.localStorage.getItem("USER_ACCOUNT");
        data ? setUser(JSON.parse(data).data) : setShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getUser() {
    const data = window.localStorage.getItem("USER_ACCOUNT");
    setUser(JSON.parse(data).data);
  }

  function logout() {
    window.localStorage.removeItem("USER_ACCOUNT");
    console.log("Logged out");
  }

  return (
    <AuthContext.Provider value={{ user, setUser, checkUser, getUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

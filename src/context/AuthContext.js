import { createContext, useContext, useState } from "react";
import axios from "axios";
import { FunctionContext } from "./FunctionContext";

// const initial_state = {
//   user: null,
// };

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { setShow } = useContext(FunctionContext);

  async function checkUser() {
    // const res = await axios.get("https://github.com");

    try {
      if (!user) {
        const data = window.localStorage.getItem("USER_ACCOUNT");
        !data && setShow(true);
        // console.log(data);
        return JSON.parse(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, checkUser }}>
      {children}
    </AuthContext.Provider>
  );
};

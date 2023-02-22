import { createContext, useState } from "react";
import axios from "axios";

// const initial_state = {
//   user: null,
// };

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  async function handleAuth() {
    // const res = await axios.get("https://github.com");

    setUser({ name: "Joe Feli" });
    console.log("auth");
  }

  return (
    <AuthContext.Provider value={{ user, setUser, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

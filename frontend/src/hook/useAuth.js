// import { getTokenData } from ("@/utils/getTokenData");
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTokenData } from "../utils/getTokenData";

const useAuth = () => {
  const { user, dispatch } = useContext(AuthContext);

  function checkUser() {
    try {
      const userData = getTokenData();
      if (userData) {
        dispatch({
          type: "AUTH_LOGGEDIN",
          payload: userData,
        });

        if (!userData) {
          console.log("No token available");
        }
      } else {
        dispatch({
          type: "AUTH_LOGGEDIN",
          payload: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return [user, checkUser];
};

export default useAuth;

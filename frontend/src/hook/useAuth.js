// import { getTokenData } from ("@/utils/getTokenData");
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTokenData } from "../utils/getTokenData";
import Cookies from "js-cookie";

const useAuth = () => {
  const { user, dispatch } = useContext(AuthContext);

  function checkUser() {
    try {
      const { tokenFound, data } = getTokenData();
      if (tokenFound) {
        dispatch({
          type: "AUTH_LOGGEDIN",
          payload: data,
        });
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

  function logoutUser() {
    Cookies.remove("nimbus_token");
    checkUser();
  }

  return { user, checkUser, logoutUser };
};

export default useAuth;

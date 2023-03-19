import { useContext, useEffect } from "react";
import { FunctionContext } from "../context/FunctionContext";

function profile() {
  const { theme, dispatch } = useContext(FunctionContext);
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("THEME");
    if (storedTheme === "LIGHT") {
      dispatch({ type: "SET_THEME", payload: "light" });
    } else {
      dispatch({ type: "SET_THEME", payload: "dark" });
    }
  }, []);

  return (
    <div
      className={`${
        theme == "light" ? "bg-white text-black" : "bg-black text-white"
      } min-h-screen h-full w-full`}
    >
      profile
    </div>
  );
}

export default profile;

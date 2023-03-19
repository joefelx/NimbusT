import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { FunctionContext } from "../context/FunctionContext";
import Image from "next/image";
import { AuthContext } from "../context/AuthContext";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  const { theme, dispatch } = useContext(FunctionContext);
  const { user, checkUser } = useContext(AuthContext);

  const auth = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_REQUEST_URL}/user?username=${id}`
    );
    window.localStorage.setItem("USER_ACCOUNT", JSON.stringify(result.data));
  };

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("THEME");
    if (storedTheme === "LIGHT") {
      dispatch({ type: "SET_THEME", payload: "light" });
    } else {
      dispatch({ type: "SET_THEME", payload: "dark" });
    }
  }, []);

  useEffect(() => {
    const func = async () => {
      await auth();
      await checkUser();
    };
    func();
  }, [id]);

  return (
    <div
      className={`${
        theme == "light" ? "bg-white text-black" : "bg-black text-white"
      } min-h-screen h-full w-full`}
    >
      <section>
        <div>{/* <Image src={} /> */}</div>
        <div>
          <h1>{user?.name}</h1>
          <h1>{user?.username}</h1>
        </div>
      </section>
    </div>
  );
};

export default User;

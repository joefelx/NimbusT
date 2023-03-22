import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

import { Logo } from "./Component";
import { FunctionContext } from "../context/FunctionContext";
import { AuthContext } from "../context/AuthContext";

import { FiSun, FiMoon } from "react-icons/fi";
import ProfileImg from "../assets/profile.jpg";

function Navigation() {
  const { theme, dispatch } = useContext(FunctionContext);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className="relative h-[5rem] flex justify-between items-center  bg-transparent">
      <div className="flex-1">
        <Logo />
      </div>

      <div className=" w-[25%] flex-2 flex justify-between">
        <span
          className=" text-[14px] cursor-pointer"
          onClick={() => {
            router.push("/thread");
          }}
        >
          Editor
        </span>
        <span className=" text-[14px] cursor-pointer">Product</span>
        <span className=" text-[14px] cursor-pointer">Pricing</span>
        <span className=" text-[14px] cursor-pointer">About</span>
      </div>

      <div className="flex-1 flex items-center justify-end">
        <div className="mr-5 text-xl cursor-pointer">
          {theme == "light" ? (
            <FiMoon
              onClick={() => {
                window.localStorage.setItem("THEME", "DARK");
                dispatch({ type: "SET_THEME", payload: "dark" });
              }}
            />
          ) : (
            <FiSun
              onClick={() => {
                window.localStorage.setItem("THEME", "LIGHT");
                dispatch({ type: "SET_THEME", payload: "light" });
              }}
            />
          )}
        </div>

        {user ? (
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#CECECE] cursor-pointer">
            <Image
              src={ProfileImg}
              className="object-cover"
              alt="profile"
              onClick={() => dispatch({ type: "SET_SHOW", payload: true })}
            />
          </div>
        ) : (
          <button
            className="bg-[#6F6F6F] px-4 py-1 rounded-xl text-[14px] border-2 border-[#CECECE] cursor-pointer"
            onClick={() => dispatch({ type: "SET_SHOW", payload: true })}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;

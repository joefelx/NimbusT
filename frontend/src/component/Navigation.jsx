import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

import { LoginCard, Logo } from "./index";
import { FunctionContext } from "../context/FunctionContext";
import { AuthContext } from "../context/AuthContext";
import { ToolContext } from "../context/ToolContext";

import ProfileImg from "../assets/profile.jpg";

function Navigation() {
  const { show, dispatch } = useContext(FunctionContext);
  const { user } = useContext(AuthContext);
  const { dispatchTool } = useContext(ToolContext);
  const router = useRouter();

  const linkStyling =
    "px-3 text-md font-medium cursor-pointer hover:text-slate-300";

  return (
    <>
      {show && <LoginCard />}
      <div className="sticky top-0 z-[100] h-[5rem] px-12 flex justify-between items-center bg-black text-white backdrop-blur-sm">
        <div className="flex justify-between items-center h-full">
          <div
            className="h-full flex items-center"
            onClick={() => router.push("/")}
          >
            <Logo />
            <p className="text-2xl flex items-center font-bold pl-5 h-full cursor-pointer">
              NimbusT
            </p>
          </div>

          <div className="h-full flex items-center justify-between pl-10">
            <span
              className={linkStyling}
              onClick={() => {
                dispatchTool({ type: "OPEN_WRITER" });
                router.push("/editor");
              }}
            >
              Editor
            </span>
            <span
              className={linkStyling}
              onClick={() => {
                dispatchTool({ type: "OPEN_TEMPLATES" });
                router.push("/editor");
              }}
            >
              Templates
            </span>
            <a
              href="https://github.com/joefelx/NimbusT"
              className="text-md"
              target="_blank"
            >
              <span className={linkStyling}>Contribute</span>
            </a>
          </div>
        </div>

        <div
          className="cursor-pointer h-full flex items-center"
          onClick={() => dispatch({ type: "SET_SHOW", payload: true })}
        >
          {user ? (
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Image
                  src={ProfileImg}
                  className="object-cover"
                  alt="profile"
                />
              </div>
              <p className="pl-3">{user?.username}</p>
            </div>
          ) : (
            <button
              className="bg-white px-4 py-1 rounded-xl text-black text-[14px] border-2 border-[#CECECE] cursor-pointer"
              onClick={() => dispatch({ type: "SET_SHOW", payload: true })}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;

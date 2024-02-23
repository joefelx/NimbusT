import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

import { Logo } from "./index";

import ProfileImg from "../assets/profile.jpg";
import { FunctionContext } from "../context/FunctionContext";
import useAuth from "../hook/useAuth";
import useTool from "../hook/useTool";

function Navigation() {
  const router = useRouter();

  const { user } = useAuth();
  const { DispatchWriter, DispatchTemplate } = useTool();
  const { functionDispatch } = useContext(FunctionContext);

  const linkStyling =
    "px-3 text-md font-medium cursor-pointer hover:text-slate-300";

  return (
    <>
      <div className="sticky top-0 z-[100] h-[5rem] flex justify-between items-center bg-black text-white backdrop-blur-sm ">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div
            className="h-full flex items-center"
            onClick={() => router.push("/")}
          >
            <Logo />
            <p className="text-2xl flex items-center font-bold pl-5 h-full cursor-pointer">
              NimbusT
            </p>
          </div>

          {/* Links */}
          <div className="h-full flex items-center justify-between pl-10">
            <span
              className={linkStyling}
              onClick={() => {
                DispatchWriter();
                router.push("/editor");
              }}
            >
              Editor
            </span>
            <span
              className={linkStyling}
              onClick={() => {
                DispatchTemplate();
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
        {/* Profile */}
        <div
          className="cursor-pointer h-full flex items-center"
          onClick={() => functionDispatch({ type: "SET_SHOW", payload: true })}
        >
          {user ? (
            <div className="flex items-center bg-slate-800 py-2 px-3 rounded-lg">
              {/* <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                {/* <Image
                  src={ProfileImg}
                  className="object-cover"
                  alt="profile"
                /> */}
              {/* </div> */}
              <p className="text-indigo-600">{user?.username}</p>
            </div>
          ) : (
            <button
              className="bg-white px-4 py-1 rounded-xl text-black text-[14px] border-2 border-[#CECECE] cursor-pointer"
              onClick={() =>
                functionDispatch({ type: "SET_SHOW", payload: true })
              }
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

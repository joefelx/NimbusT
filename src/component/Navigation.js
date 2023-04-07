import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

import { LoginCard, Logo } from "./Component";
import { FunctionContext } from "../context/FunctionContext";
import { AuthContext } from "../context/AuthContext";
import { ToolContext } from "../context/ToolContext";

import ProfileImg from "../assets/profile.jpg";

function Navigation() {
  const { show, dispatch } = useContext(FunctionContext);
  const { user } = useContext(AuthContext);
  const { dispatchTool } = useContext(ToolContext);
  const router = useRouter();

  return (
    <>
      {show && <LoginCard />}
      <div className="relative h-[5rem] px-12 flex justify-between items-center bg-black text-white ">
        <div className="flex-1">
          <Logo onClick={() => router.push("/")} />
        </div>

        <div className="flex-[2] px-24 flex justify-between">
          <span
            className="text-sm cursor-pointer hover:text-slate-300"
            onClick={() => {
              dispatchTool({ type: "OPEN_EDITOR" });
              router.push("/editor");
            }}
          >
            Editor
          </span>
          <span
            className="text-sm cursor-pointer hover:text-slate-300"
            onClick={() => {
              dispatchTool({ type: "OPEN_TEMPLATES" });
              router.push("/editor");
            }}
          >
            Templates
          </span>

          <a
            href="https://github.com/joefelx/NimbusT"
            className="text-sm"
            target="_blank"
          >
            <span className="text-sm cursor-pointer hover:text-slate-300">
              Contribute
            </span>
          </a>
        </div>

        <div className="flex-1 flex items-center justify-end">
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

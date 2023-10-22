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

  const linkStyling = "px-3 text-md cursor-pointer hover:text-slate-300";

  return (
    <>
      {show && <LoginCard />}
      <div className="relative h-[5rem] px-12 flex justify-between items-center bg-black text-white ">
        {/* left div */}
        <div className="flex-1 flex items-center">
          <div className="pr-5">
            <Logo onClick={() => router.push("/")} />
          </div>

          <div className=" flex justify-between ">
            <span
              className={linkStyling}
              onClick={() => {
                dispatchTool({ type: "OPEN_EDITOR" });
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

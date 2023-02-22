import Link from "next/link";
import Image from "next/image";

import { Logo } from "./Graphics";
import { useContext } from "react";
import { FunctionContext } from "@/context/FunctionContext";
import { AuthContext } from "@/context/AuthContext";

import ProfileImg from "../assets/profile.jpg";

function Navigation() {
  const { setShow } = useContext(FunctionContext);
  const { user } = useContext(AuthContext);
  return (
    <div className=" h-[7rem] flex justify-between items-center">
      <div className="flex-1">
        <Logo />
      </div>

      <div className=" w-[25%] flex-2 flex justify-between">
        <span className=" text-[14px] cursor-pointer">
          <Link href="/thread">Thread</Link>
        </span>
        <span className=" text-[14px] cursor-pointer">Product</span>
        <span className=" text-[14px] cursor-pointer">Pricing</span>
        <span className=" text-[14px] cursor-pointer">About</span>
      </div>

      <div className="flex-1 flex justify-end">
        {user ? (
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-[#CECECE] cursor-pointer">
            <Image src={ProfileImg} className="object-cover" />
          </div>
        ) : (
          <button
            className="bg-[#6F6F6F] px-4 py-1 rounded-xl text-[14px] border-2 border-[#CECECE] cursor-pointer"
            onClick={() => setShow(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;

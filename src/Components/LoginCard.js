import Image from "next/image";
import Logo from "../assets/Logo-individual transparent.png";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const LoginCard = () => {
  const { handleAuth } = useContext(AuthContext);
  return (
    <div className="w-full h-full flex items-center justify-center text-white bg-transparent backdrop-blur-md fixed ">
      <div className="w-[30rem] p-10 flex flex-col items-center justify-center bg-black border-2 border-slate-700 rounded-2xl">
        <div className="px-5 ">
          <div className="flex items-center justify-between ">
            <Image src={Logo} className="w-[60px] " />
            <h1 className="text-4xl font-black">Nimbus Tweet</h1>
          </div>
          <span className="text-lg font-semibold relative top-5 ">
            Join Nimbus Tweet and Write effective Tweets and Threads
          </span>
        </div>

        <button
          className="bg-[#1DA1F2] px-4 py-2 rounded-xl shadow-xl mt-12"
          onClick={handleAuth}
        >
          Connect with Twitter
        </button>
      </div>
    </div>
  );
};

export default LoginCard;

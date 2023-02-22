import Image from "next/image";
import Logo from "../assets/Logo-individual transparent.png";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { FunctionContext } from "@/context/FunctionContext";
import { BsTwitter } from "react-icons/bs";

const LoginCard = () => {
  const { handleAuth } = useContext(AuthContext);
  const { setShow } = useContext(FunctionContext);

  return (
    <div
      className="w-full h-full flex items-center justify-center text-white bg-transparent backdrop-blur-md fixed "
      onClick={() => {
        setShow(false);
      }}
    >
      <div className="w-[30rem] p-10 flex flex-col items-center justify-center bg-black border-2 border-slate-700 rounded-2xl">
        <div className="px-5 ">
          <div className="flex items-center justify-between ">
            <Image src={Logo} className="w-[60px] " alt="Logo" />
            <h1 className="text-4xl font-black">Nimbus Tweet</h1>
          </div>
          <span className="text-lg font-semibold relative top-5 ">
            Join Nimbus Tweet and Write effective Tweets and Threads
          </span>
        </div>

        <button
          className="bg-[#1DA1F2] w-[20rem] py-2 rounded-xl shadow-xl mt-12 text-xl font-bold flex items-center justify-evenly"
          onClick={handleAuth}
        >
          Connect with Twitter
          <BsTwitter />
        </button>
      </div>
    </div>
  );
};

export default LoginCard;

import Image from "next/image";
import Logo from "../assets/Logo-individual transparent.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { FunctionContext } from "@/context/FunctionContext";
import { BsTwitter } from "react-icons/bs";
import { LOGIN_URL } from "../constant";

const LoginCard = () => {
  const { user, logout } = useContext(AuthContext);
  const { dispatch } = useContext(FunctionContext);

  return (
    <div
      className="w-full h-full flex items-center justify-center text-white bg-transparent backdrop-blur-md fixed z-50"
      onClick={() => {
        dispatch({ type: "SET_SHOW", payload: false });
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
        {!user ? (
          <a href={LOGIN_URL}>
            <button className="bg-[#1DA1F2] w-[20rem] py-2 rounded-xl shadow-xl mt-12 text-xl font-bold flex items-center justify-evenly">
              Connect with Twitter
              <BsTwitter />
            </button>
          </a>
        ) : (
          <button
            className="bg-[#1DA1F2] w-[20rem] py-2 rounded-xl shadow-xl mt-12 text-xl font-bold flex items-center justify-evenly"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginCard;

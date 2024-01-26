import { useContext } from "react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";

import useAuth from "../hook/useAuth";
import { FunctionContext } from "../context/FunctionContext";

import Logo from "../assets/Logo-individual transparent.png";

const LoginCard = () => {
  const { functionDispatch } = useContext(FunctionContext);
  const { user, logoutUser } = useAuth();

  return (
    <div
      className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-md fixed z-[200]"
      onClick={() => {
        functionDispatch({ type: "SET_SHOW", payload: false });
      }}
    >
      <div className="bg-black text-white w-[30rem] p-10 flex flex-col items-center justify-center border-2 border-slate-700 rounded-2xl">
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
          <a href={`${process.env.NEXT_PUBLIC_REQUEST_URL}/auth/twitter`}>
            <button className="bg-indigo-600 text-white w-[20rem] py-2 rounded-xl shadow-xl mt-12 text-xl font-bold flex items-center justify-evenly">
              Connect with Twitter
              <BsTwitter />
            </button>
          </a>
        ) : (
          <div className="mt-4">
            <button
              className="bg-indigo-600 text-white w-[20rem] py-2 rounded-xl shadow-xl mt-8 text-xl font-bold flex items-center justify-evenly"
              onClick={() => {
                logoutUser();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginCard;

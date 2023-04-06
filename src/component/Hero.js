import { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { FunctionContext } from "../context/FunctionContext";

import { HiOutlineArrowRight } from "react-icons/hi";

function Hero() {
  const router = useRouter();
  const { dispatch } = useContext(FunctionContext);

  return (
    <div className="relative h-[15rem] flex flex-col text-center justify-between items-center z-20 my-5">
      <div className="z-10 mb-5">
        <h1 className="text-8xl font-bold relative">
          Create the thread <br /> in <i className="font-[Amphora]">New</i> way
        </h1>
      </div>
      <div className="flex flex-col items-center z-10">
        <p className="text-xl text-bold">
          Make the best thread ever with Nimbus
        </p>
        <button
          className="bg-white text-black hover:bg-gray-300
           flex items-center px-6 py-2 mt-7 rounded-2xl text-[1rem] font-semibold border-2 border-gray-400"
          onClick={() => {
            router.push("/editor");
          }}
        >
          Make Thread
          <HiOutlineArrowRight className="ml-3" />
        </button>
      </div>
    </div>
  );
}

export default Hero;

import Image from "next/image";
import { useRouter } from "next/router";

import { HiOutlineArrowRight } from "react-icons/hi";
import ThreadBox from "../assets/ThreadBox.png";
import { Gradient } from "./Graphics";

function Hero() {
  const router = useRouter();

  return (
    <div className="bg-slate-900 text-white  border-2 border-slate-700 rounded-3xl overflow-hidden">
      <div className="relative flex justify-between items-center z-20 p-10 bg-black/95">
        <Gradient />
        <div className="flex-[1]">
          <h1 className="text-[4rem] font-bold leading-none">
            Create the thread in <i className="font-[Amphora]">New</i> way
          </h1>
        </div>
        <div className="flex-1 flex flex-col z-10">
          <p className="text-lg text-bold">
            Make the best thread ever with Nimbus
          </p>
          <button
            className="bg-white text-black hover:bg-gray-300
           flex items-center w-48 px-6 py-2 mt-7 rounded-2xl text-[1rem] font-semibold border-2 border-gray-400"
            onClick={() => {
              router.push("/editor");
            }}
          >
            Make Thread
            <HiOutlineArrowRight className="ml-3" />
          </button>
        </div>

        <div className="h-64 w-[20rem] flex items-center justify-center ">
          <Image src={ThreadBox} className=" object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

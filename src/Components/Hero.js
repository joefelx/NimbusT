import Image from "next/image";
import Link from "next/link";

import ThreadBox from "../assets/ThreadBox.png";

function Hero() {
  return (
    <div className=" h-[15rem] flex justify-between items-center">
      <div>
        <h1 className=" text-6xl font-semibold  m-0 p-0">
          Create the Thread <br />
          in new way
        </h1>
      </div>
      <div>
        <p className="text-[14px] ">
          Make the best thread ever <br />
          with Nimbus
        </p>
        <Link href="/thread">
          <button className="bg-white text-black px-4 py-1 mt-6 rounded-xl text-[14px] border-2 border-[#CECECE] hover:bg-slate-200">
            Make Thread
          </button>
        </Link>
      </div>
      <div className=" pointer-events-none">
        <Image src={ThreadBox} className="w-[230px]" alt="thread preview box" />
      </div>
    </div>
  );
}

export default Hero;

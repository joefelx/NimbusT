import Image from "next/image";
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
        <button className="bg-white text-black px-4 py-1 mt-6 rounded-xl text-[14px] border-2 border-[#CECECE]">
          Make Thread
        </button>
      </div>
      <div className=" pointer-events-none">
        <Image src={ThreadBox} width={230} height={75} />
      </div>
    </div>
  );
}

export default Hero;
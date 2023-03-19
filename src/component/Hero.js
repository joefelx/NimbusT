import { useRouter } from "next/router";
import { HiOutlineArrowRight } from "react-icons/hi";

import { useEffect, useContext } from "react";
import { FunctionContext } from "../context/FunctionContext";

function Hero() {
  const router = useRouter();
  const { theme, dispatch } = useContext(FunctionContext);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("THEME");
    if (storedTheme === "LIGHT") {
      dispatch({ type: "SET_THEME", payload: "light" });
    } else {
      dispatch({ type: "SET_THEME", payload: "dark" });
    }
  }, []);

  return (
    <div className="relative h-[15rem] flex flex-col text-center justify-between items-center  z-20">
      <div className="z-10">
        <h1 className="text-6xl font-black">
          Create the thread <br /> in <i>New</i> way
        </h1>
      </div>
      <div className="flex flex-col items-center z-10">
        <p className="text-[14px]">Make the best thread ever with Nimbus</p>
        {/* <Link href="/thread"> */}

        <button
          className={`${
            theme == "light"
              ? " bg-black text-white hover:bg-gray-700"
              : "bg-white text-black hover:bg-gray-300"
          } flex items-center px-6 py-2 mt-7 rounded-2xl text-[1rem] font-semibold border-2 border-gray-400`}
          onClick={() => {
            router.push("/thread");
          }}
        >
          Make Thread
          <HiOutlineArrowRight className="ml-3" />
        </button>
        {/* </Link> */}
      </div>
      {/* <div className=" pointer-events-none">
        <Image src={ThreadBox} className="w-[230px]" alt="thread preview box" />
      </div> */}
    </div>
  );
}

export default Hero;

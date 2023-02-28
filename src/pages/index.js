import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Hero, Navigation, LoginCard } from "@/components/Components";
import { Gradient, Loading } from "@/components/Graphics";
import { FunctionContext } from "@/context/FunctionContext";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import EditorPreview from "../assets/Nimbus-ScreenShot.png";

export default function Home() {
  const { show } = useContext(FunctionContext);
  const { checkUser } = useContext(AuthContext);

  useEffect(() => {
    // Check for the user logged or not and call a function CheckUser
    checkUser();
  }, []);

  return (
    <div>
      {/* {loading && <Loading />} */}
      {show && <LoginCard />}
      <div className=" h-auto min-h-screen w-full bg-black text-white px-[3rem] overflow-hidden">
        <Navigation />
        <Hero />
        <div className="mt-16 relative flex items-center justify-center h-screen">
          <Image
            src={EditorPreview}
            className="w-[70vw] z-40 rounded-lg shadow-xl"
          />
          <Gradient />
        </div>
      </div>
    </div>
  );
}

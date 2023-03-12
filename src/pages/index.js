import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Hero, Navigation, LoginCard } from "@/components/Components";
import { CornerGradient, Gradient, Loading } from "@/components/Graphics";
import { FunctionContext } from "@/context/FunctionContext";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import EditorPreview from "../assets/Nimbus-ScreenShot.png";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  const { show, theme, dispatch } = useContext(FunctionContext);
  const { checkUser } = useContext(AuthContext);

  useEffect(() => {
    // usetheme
    const storedTheme = window.localStorage.getItem("THEME");
    if (storedTheme === "LIGHT") {
      dispatch({ type: "SET_THEME", payload: "light" });
    } else {
      dispatch({ type: "SET_THEME", payload: "dark" });
    }

    checkUser();

    // Check for the user logged or not and call a function CheckUser
  }, []);

  return (
    <div>
      {show && <LoginCard />}
      <div
        className={` h-auto min-h-screen w-full ${
          theme == "light" ? "bg-white text-black" : "bg-black text-white"
        } overflow-hidden relative`}
      >
        {/* <Gradient /> */}
        <Navigation />
        <Hero />
        <div className="mt-16 relative flex items-center justify-center h-screen px-[3rem]">
          <Image
            src={EditorPreview}
            className="w-[70vw] z-40 rounded-lg shadow-xl"
          />
          <Gradient />
        </div>
        {/* Features list */}
        <Features />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

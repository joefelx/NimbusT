import { useContext, useEffect } from "react";
import { Hero, Navigation, LoginCard, Gradient } from "../component/Component";

import { FunctionContext } from "../context/FunctionContext";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import EditorPreview from "../assets/Nimbus-ScreenShot.png";
import Footer from "../component/Footer";
import Features from "../component/Features";

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
        <div className="mt-16 relative flex flex-col items-center justify-center h-screen px-[3rem]">
          <div className=" z-50 w-[70vw]">
            <Image
              src={EditorPreview}
              alt="editorpreview"
              className=" z-40 rounded-lg shadow-xl"
            />
            <div className="relative bg-gradient-to-t from-black to-transparent">
              <h1>Exciting Templates</h1>
              <p>Cool and new Templates which are professional</p>
            </div>
          </div>
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

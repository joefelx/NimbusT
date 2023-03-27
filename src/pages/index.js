import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Hero, Navigation, LoginCard, Gradient } from "../component/Component";

import { FunctionContext } from "../context/FunctionContext";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import EditorPreview from "../assets/Nimbus-ScreenShot.png";
import Footer from "../component/Footer";
import Features from "../component/Features";

export default function Home() {
  const { show, theme, dispatch } = useContext(FunctionContext);
  const { user, checkUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // usetheme
    const storedTheme = window.localStorage.getItem("THEME");
    if (storedTheme === "LIGHT") {
      dispatch({ type: "SET_THEME", payload: "light" });
    } else {
      dispatch({ type: "SET_THEME", payload: "dark" });
    }

    // Check for the user logged or not and call a function CheckUser
    checkUser();
  }, []);

  useEffect(() => {
    router.push("/");
  }, [user]);

  return (
    <div>
      {show && <LoginCard />}
      <Navigation />
      <div
        className={` h-auto min-h-screen w-full bg-white
        } overflow-hidden relative px-12`}
      >
        {/* <Gradient /> */}
        <div className="bg-black text-white rounded-3xl border-2 border-slate-400 p-10 shadow-2xl shadow-slate-400">
          <Hero />
          <div className="mt-16 relative flex items-center justify-center h-screen">
            <div className="z-50 w-[70vw]">
              <Image
                src={EditorPreview}
                alt="editorpreview"
                className="z-40 rounded-lg shadow-xl"
              />
            </div>
            <Gradient />
          </div>
          {/* Features list */}
          <Features />
          {/* Footer */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

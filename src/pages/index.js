import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Hero, Navigation, LoginCard } from "@/components/Components";
import { CornerGradient, Gradient, Loading } from "@/components/Graphics";
import { FunctionContext } from "@/context/FunctionContext";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import EditorPreview from "../assets/Nimbus-ScreenShot.png";

const FeatureBox = ({ text }) => {
  return (
    <div className="flex-1 flex items-center bg-black border border-white rounded-3xl m-4 p-5">
      <span className="text-white text-[4rem] font-bold">{text}</span>
    </div>
  );
};

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
        <div className=" bg-black text-white py-5">
          <FeatureBox text="Make Threads" />
          <FeatureBox text="Professional Templates" />
          <FeatureBox text="Schedule it" />
        </div>
        {/* Footer */}
        <footer className="h-[50vh] flex flex-col justify-between">
          <section className="flex justify-around">
            <ul>
              <li>Home</li>
              <li>Editor</li>
              <li>Templates</li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Editor</li>
              <li>Templates</li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Editor</li>
              <li>Templates</li>
            </ul>
          </section>
          <section className="flex justify-center">
            <span>Developed by Felix</span>
          </section>
        </footer>
      </div>
    </div>
  );
}

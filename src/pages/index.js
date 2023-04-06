import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  Hero,
  Navigation,
  Gradient,
  Footer,
  Features,
  LoginCard,
} from "../component/Component";

import { FunctionContext } from "../context/FunctionContext";
import { AuthContext } from "../context/AuthContext";

import EditorPreview from "../assets/Editor2.png";

export default function Home() {
  const { dispatch } = useContext(FunctionContext);
  const { user, checkUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Check for the user logged or not and call a function CheckUser
    checkUser();
  }, []);

  useEffect(() => {
    router.push("/");
  }, [user]);

  return (
    <>
      <Navigation />
      <div className=" h-auto min-h-screen w-full bg-black overflow-hidden relative px-12">
        {/* <Gradient /> */}
        <div className="bg-slate-900 text-white rounded-3xl border-2 border-slate-700 p-10">
          <Hero />
          <div className="mt-20 relative flex items-center justify-center h-screen">
            <div className="z-50 w-[70vw]">
              <Image
                src={EditorPreview}
                alt="editorpreview"
                className="z-40 rounded-xl shadow-xl"
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
    </>
  );
}

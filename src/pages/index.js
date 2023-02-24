import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Hero, Navigation, LoginCard } from "@/components/Components";
import { Gradient, Loading } from "@/components/Graphics";
import { FunctionContext } from "@/context/FunctionContext";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const { loading, show, setShow } = useContext(FunctionContext);
  const { checkUser } = useContext(AuthContext);

  useEffect(() => {
    // Check for the user logged or not and call a function CheckUser
    setShow(true);
    checkUser();
    setShow(false);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {show && <LoginCard />}
      <div className=" h-auto min-h-screen w-full bg-black text-white px-[3rem] overflow-hidden">
        <Navigation />
        <Hero />
        <Gradient />
      </div>
    </div>
  );
}

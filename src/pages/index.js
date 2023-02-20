import { useContext, useEffect } from "react";
import { Hero, Navigation, LoginCard } from "@/components/Components";
import { Gradient, Loading } from "@/components/Graphics";
import { FunctionContext } from "@/context/FunctionContext";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const { loading } = useContext(FunctionContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Check for the user logged or not and call a function CheckUser
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {!user && <LoginCard />}
      <div className=" h-auto min-h-screen w-full bg-black text-white px-[3rem] overflow-hidden">
        <Navigation />
        <Hero />
        <Gradient />
      </div>
    </div>
  );
}

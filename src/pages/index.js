import { useContext } from "react";
import { Hero, Navigation } from "@/components/Components";
import { Gradient, Loading } from "@/components/Graphics";
import { FunctionContext } from "@/context/FunctionContext";

export default function Home() {
  const { loading } = useContext(FunctionContext);

  return (
    <div>
      {loading && <Loading />}

      <div className=" h-auto min-h-screen w-full bg-black text-white px-[3rem] overflow-hidden">
        <Navigation />
        <Hero />
        <Gradient />
      </div>
    </div>
  );
}

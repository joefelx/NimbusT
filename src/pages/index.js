import Hero from "@/Components/Hero";
import Navigation from "@/Components/Navigation";
import Gradient from "@/Components/Gradient";
import Loading from "@/Components/Loading";
import { useContext, useEffect, useState } from "react";
import { FunctionContext } from "@/context/FunctionContext";

export default function Home() {
  const { loading } = useContext(FunctionContext);
  const [load, setload] = useState(true);
  useEffect(() => {
    setload(loading);
  }, [loading]);

  return (
    <div>
      {load && <Loading />}

      <div className=" h-auto min-h-screen w-full bg-black text-white px-[3rem] overflow-hidden">
        <Navigation />
        <Hero />
        <Gradient />
      </div>
    </div>
  );
}

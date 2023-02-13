import Hero from "@/Components/Hero";
import Navigation from "@/Components/Navigation";
import Gradient from "@/Components/Gradient";

export default function Home() {
  return (
    <div className=" h-auto min-h-screen w-full bg-black text-white px-[3rem] overflow-hidden">
      <Navigation />
      <Hero />
      <Gradient />
    </div>
  );
}

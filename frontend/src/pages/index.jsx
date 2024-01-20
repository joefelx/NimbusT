import { useEffect } from "react";

import { Hero, Navigation, Footer, Features } from "../component";

import useAuth from "../hook/useAuth";

export default function Home() {
  const [user, checkUser] = useAuth();

  useEffect(() => {
    if (user === null) {
      checkUser();
    }
  }, []);

  return (
    <div>
      <Navigation />
      <div className="h-auto min-h-screen w-full bg-black overflow-hidden relative px-12">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

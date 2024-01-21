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
    <div className="px-12 bg-black">
      <Navigation />
      <div className="h-auto min-h-screen w-full overflow-hidden relative">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

import { useContext, useEffect } from "react";

import { Hero, Navigation, Footer, LoginCard } from "../component";

import useAuth from "../hook/useAuth";
import { FunctionContext } from "../context/FunctionContext";

function Home() {
  const { user, checkUser } = useAuth();
  const { show } = useContext(FunctionContext);

  useEffect(() => {
    if (user === null) {
      checkUser();
    }
  }, []);

  return (
    <>
      {show && <LoginCard />}

      <div className="px-12 bg-black">
        <Navigation />
        <div className="h-auto min-h-screen w-full overflow-hidden relative">
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { Hero, Navigation, Footer, Features } from "../component";

import { AuthContext } from "../context/AuthContext";

export default function Home() {
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
    <div>
      <Navigation />
      <div className="h-auto min-h-screen w-full bg-black overflow-hidden relative px-12">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { LoginCard } from "../components/Components";

function auth() {
  const { setUser } = useContext(AuthContext);

  return (
    <div className="bg-black min-h-screen h-auto w-full">
      {/* login card */}
      <LoginCard />
    </div>
  );
}

export default auth;

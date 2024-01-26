import "../styles/globals.css";
import { useRouter } from "next/router";
import { Poppins } from "@next/font/google";

import { PostContextProvider } from "../context/PostContext";
import { AuthContextProvider } from "../context/AuthContext";
import { ToolContextProvider } from "../context/ToolContext";
import { FunctionContextProvider } from "@/context/FunctionContext";

const poppins = Poppins({ subsets: ["latin"], weight: "400", preload: true });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={poppins.className}>
      <FunctionContextProvider>
        <AuthContextProvider>
          <PostContextProvider>
            <ToolContextProvider>
              <Component key={router.asPath} {...pageProps} />
            </ToolContextProvider>
          </PostContextProvider>
        </AuthContextProvider>
      </FunctionContextProvider>
    </div>
  );
}

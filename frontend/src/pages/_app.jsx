import "../styles/globals.css";
import { useRouter } from "next/router";
import { Poppins } from "@next/font/google";

import { FunctionContextProvider } from "../context/FunctionContext";
import { AuthContextProvider } from "../context/AuthContext";
import { ToolContextProvider } from "../context/ToolContext";

const poppins = Poppins({ subsets: ["latin"], weight: "400", preload: true });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={poppins.className}>
      <AuthContextProvider>
        <FunctionContextProvider>
          <ToolContextProvider>
            <Component key={router.asPath} {...pageProps} />
          </ToolContextProvider>
        </FunctionContextProvider>
      </AuthContextProvider>
    </div>
  );
}

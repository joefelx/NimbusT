import "../styles/globals.css";
import { useRouter } from "next/router";
import { Ubuntu } from "@next/font/google";

import { FunctionContextProvider } from "../context/FunctionContext";
import { AuthContextProvider } from "../context/AuthContext";
import { ToolContextProvider } from "../context/ToolContext";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500", preload: true });
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={ubuntu.className}>
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

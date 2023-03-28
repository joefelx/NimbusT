import "../styles/globals.css";
import { FunctionContextProvider } from "../context/FunctionContext";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import { ToolContextProvider } from "../context/ToolContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <FunctionContextProvider>
        <ToolContextProvider>
          <Component key={router.asPath} {...pageProps} />
        </ToolContextProvider>
      </FunctionContextProvider>
    </AuthContextProvider>
  );
}

import "@/styles/globals.css";
import { FunctionContextProvider } from "@/context/FunctionContext";
import { AuthContextProvider } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <FunctionContextProvider>
      <AuthContextProvider>
        <Component key={router.asPath} {...pageProps} />
      </AuthContextProvider>
    </FunctionContextProvider>
  );
}

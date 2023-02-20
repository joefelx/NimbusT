import "@/styles/globals.css";
import { FunctionContextProvider } from "@/context/FunctionContext";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <FunctionContextProvider>
        <Component {...pageProps} />
      </FunctionContextProvider>
    </AuthContextProvider>
  );
}

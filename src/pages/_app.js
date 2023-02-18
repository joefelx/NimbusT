import "@/styles/globals.css";
import { FunctionContextProvider } from "@/context/FunctionContext";
import Loading from "@/components/Loading";

export default function App({ Component, pageProps }) {
  return (
    <FunctionContextProvider>
      <Component {...pageProps} />
    </FunctionContextProvider>
  );
}

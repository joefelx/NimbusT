import "@/styles/globals.css";
import { FunctionContextProvider } from "@/context/FunctionContext";

export default function App({ Component, pageProps }) {
  return (
    <FunctionContextProvider>
      <Component {...pageProps} />
    </FunctionContextProvider>
  );
}

import { createContext, useState } from "react";

// const inital_state = {
//   input,
// };

export const FunctionContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [input, setInput] = useState("Hello");
  return (
    <FunctionContext.Provider
      value={{
        input,
        setInput,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

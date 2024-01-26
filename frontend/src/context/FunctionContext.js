import { createContext, useReducer } from "react";
import FunctionReducer from "./reducer/FunctionReducer";

const INITIAL_STATE = {
  loading: false,
  show: false,
};

export const FunctionContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FunctionReducer, INITIAL_STATE);

  return (
    <FunctionContext.Provider
      value={{
        show: state.show,
        functionDispatch: dispatch,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

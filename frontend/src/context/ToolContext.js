import { createContext, useReducer } from "react";
import ToolReducer from "./reducer/ToolReducer";

const INITIAL_STATE = {
  writerOpen: true,
  templatesOpen: false,
  schedulerOpen: false,
};

export const ToolContext = createContext();

export const ToolContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToolReducer, INITIAL_STATE);

  return (
    <ToolContext.Provider
      value={{
        writer: state.writerOpen,
        template: state.templatesOpen,
        scheduler: state.schedulerOpen,
        toolsDispatch: dispatch,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

import { createContext, useReducer } from "react";
import ToolReducer from "./reducer/ToolReducer";

const INITIAL_STATE = {
  editorOpen: true,
  templatesOpen: false,
  calendarOpen: false,
  draftOpen: false,
};

export const ToolContext = createContext();

export const ToolContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToolReducer, INITIAL_STATE);

  return (
    <ToolContext.Provider
      value={{
        editor: state.editorOpen,
        templates: state.templatesOpen,
        calendar: state.calendarOpen,
        draft: state.draftOpen,
        dispatchTool: dispatch,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

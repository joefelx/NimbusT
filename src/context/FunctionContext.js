import { createContext, useReducer, useState } from "react";
import FunctionReducer from "./reducer/FunctionReducer";
import axios from "axios";

const INITIAL_STATE = {
  input: "",
  threads: [],
  loading: false,
  complete: false,
  show: false,
  expand: false,
};

export const FunctionContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FunctionReducer, INITIAL_STATE);

  const PostThread = async () => {
    dispatch({ type: "SET_LOADING" });

    const res = await axios.post("http://localhost:5000/thread", {
      username: "testfelix2",
      threadsList: state.threads,
      scheduled: false,
      date: "1677718800000",
    });

    dispatch({ type: "SET_COMPLETE" });
    const comp = setInterval(() => {
      dispatch({ type: "REMOVE_COMPLETE" });
      clearInterval(comp);
    }, 1500);
  };

  return (
    <FunctionContext.Provider
      value={{
        input: state.input,
        thread: state.threads,
        loading: state.loading,
        complete: state.complete,
        show: state.show,
        expand: state.expand,
        PostThread,
        dispatch,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

import { createContext, useReducer, useState } from "react";
import FunctionReducer from "./reducer/FunctionReducer";
import axios from "axios";
import threadtemplate1 from "../assets/threadtemplate1.png";

const INITIAL_STATE = {
  theme: "",
  input: "",
  threads: [],
  loading: false,
  complete: false,
  show: false,
  expand: false,
  openTemplate: false,
  templates: [
    {
      id: 0,
      img: threadtemplate1,
      text: "8 Things that are so useful but you're probably not aware of (all free):\n\n^1. Tool1\n\nSome paragraph.\n\nSuper helpful for:\n\n• Bullet1\n• Bullet1\n• Bullet1\n\n^2. Tool2\n\nSome Paragraph.\n\n•Bullet1.\n\n^3. Tool3\n\nSome Paragraph.\n\n• Bullet1\n\n^4. Tool4\n\nSome Paragraph.\n\n• Bullet1\n\n^5. Tool5\n\nSome Paragraph.\n\n• Bullet1\n\n^6. Tool6\n\nSome Paragraph.\n\n• Bullet1\n\n^7. Tool7\n\nSome Paragraph.\n\n• Bullet1\n\n^8. Tool8\n\nSome Paragraph.\n\n• Bullet1\n\n^Thanks for checking out this thread! Add more excellent Chrome extensions below. Follow \n@user\n for more.",
    },
    {
      id: 1,
      img: threadtemplate1,
    },
    {
      id: 2,
      img: threadtemplate1,
    },
    {
      id: 3,
      img: threadtemplate1,
    },
    {
      id: 4,
      img: threadtemplate1,
    },
    {
      id: 5,
      img: threadtemplate1,
    },
  ],
};

export const FunctionContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FunctionReducer, INITIAL_STATE);

  const NEXT_PUBLIC_REQUEST_URL = process.env.NEXT_PUBLIC_REQUEST_URL;
  const PostThread = async () => {
    dispatch({ type: "SET_LOADING" });

    console.log(`${NEXT_PUBLIC_REQUEST_URL}/tweet/thread`);

    const res = await axios.post(`${NEXT_PUBLIC_REQUEST_URL}/tweet/thread`, {
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
        openTemplate: state.openTemplate,
        templates: state.templates,
        theme: state.theme,
        PostThread,
        dispatch,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

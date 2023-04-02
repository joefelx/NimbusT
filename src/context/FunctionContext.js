import axios from "axios";

import { createContext, useContext, useReducer } from "react";
import FunctionReducer from "./reducer/FunctionReducer";
import { AuthContext } from "./AuthContext";

import threadtemplate1 from "../assets/threadtemplate1.png";

const INITIAL_STATE = {
  theme: "",
  input: "",
  threads: [],
  draftThreads: [],
  currentThread: {},
  loading: false,
  complete: false,
  show: false,
  expand: false,
  templates: [
    {
      id: 0,
      title: "Professional",
      image: threadtemplate1,
      template:
        "8 Things that are so useful but you're probably not aware of (all free):\n\n^1. Tool1\n\nSome paragraph.\n\nSuper helpful for:\n\n• Bullet1\n• Bullet1\n• Bullet1\n\n^2. Tool2\n\nSome Paragraph.\n\n•Bullet1.\n\n^3. Tool3\n\nSome Paragraph.\n\n• Bullet1\n\n^4. Tool4\n\nSome Paragraph.\n\n• Bullet1\n\n^5. Tool5\n\nSome Paragraph.\n\n• Bullet1\n\n^6. Tool6\n\nSome Paragraph.\n\n• Bullet1\n\n^7. Tool7\n\nSome Paragraph.\n\n• Bullet1\n\n^8. Tool8\n\nSome Paragraph.\n\n• Bullet1\n\n^Thanks for checking out this thread! Add more excellent Chrome extensions below. Follow \n@user\n for more.",
      tags: ["photography", "travel", "winter"],
    },
    {
      id: 1,
      title: "Professional",
      image: threadtemplate1,
      template:
        "^5. Tool5\n\nSome Paragraph.\n\n• Bullet1\n\n^6. Tool6\n\nSome Paragraph.\n\n• Bullet1\n\n^7. Tool7\n\nSome Paragraph.\n\n• Bullet1\n\n^8. Tool8\n\nSome Paragraph.\n\n• Bullet1\n\n^Thanks for checking out this thread! Add more excellent Chrome extensions below. Follow \n@user\n for more.",
      tags: ["photography", "travel", "winter"],
    },
    {
      id: 2,
      title: "Professional",
      image: threadtemplate1,
      template:
        "8 Things that are so useful but you're probably not aware of (all free):\n\n^1. Tool1\n\nSome paragraph.\n\nSuper helpful for:\n\n• Bullet1\n• Bullet1\n• Bullet1\n\n^2. Tool2\n\nSome Paragraph.\n\n•Bullet1.\n\n^3. Tool3\n\nSome Paragraph.\n\n• Bullet1\n\n^4. Tool4\n\nSome Paragraph.\n\n• Bullet1\n\n^5. Tool5\n\nSome Paragraph.\n\n• Bullet1\n\n^6. Tool6\n\nSome Paragraph.\n\n• Bullet1\n\n^7. Tool7\n\nSome Paragraph.\n\n• Bullet1\n\n^8. Tool8\n\nSome Paragraph.\n\n• Bullet1\n\n^Thanks for checking out this thread! Add more excellent Chrome extensions below. Follow \n@user\n for more.",
      tags: ["photography", "travel", "winter"],
    },
    {
      id: 3,
      title: "Professional",
      image: threadtemplate1,
      template:
        "8 Things that are so useful but you're probably not aware of (all free):\n\n^1. Tool1\n\nSome paragraph.\n\nSuper helpful for:\n\n• Bullet1\n• Bullet1\n• Bullet1\n\n^2. Tool2\n\nSome Paragraph.\n\n•Bullet1.\n\n^3. Tool3\n\nSome Paragraph.\n\n• Bullet1\n\n^4. Tool4\n\nSome Paragraph.\n\n• Bullet1\n\n^5. Tool5\n\nSome Paragraph.\n\n• Bullet1\n\n^6. Tool6\n\nSome Paragraph.\n\n• Bullet1\n\n^7. Tool7\n\nSome Paragraph.\n\n• Bullet1\n\n^8. Tool8\n\nSome Paragraph.\n\n• Bullet1\n\n^Thanks for checking out this thread! Add more excellent Chrome extensions below. Follow \n@user\n for more.",
      tags: ["photography", "travel", "winter"],
    },
    {
      id: 4,
      title: "Professional",
      image: threadtemplate1,
      template:
        "8 Things that are so useful but you're probably not aware of (all free):\n\n^1. Tool1\n\nSome paragraph.\n\nSuper helpful for:\n\n• Bullet1\n• Bullet1\n• Bullet1\n\n^2. Tool2\n\nSome Paragraph.\n\n•Bullet1.\n\n^3. Tool3\n\nSome Paragraph.\n\n• Bullet1\n\n^4. Tool4\n\nSome Paragraph.\n\n• Bullet1\n\n^5. Tool5\n\nSome Paragraph.\n\n• Bullet1\n\n^6. Tool6\n\nSome Paragraph.\n\n• Bullet1\n\n^7. Tool7\n\nSome Paragraph.\n\n• Bullet1\n\n^8. Tool8\n\nSome Paragraph.\n\n• Bullet1\n\n^Thanks for checking out this thread! Add more excellent Chrome extensions below. Follow \n@user\n for more.",
      tags: ["photography", "travel", "winter"],
    },
    {
      id: 5,
      title: "Professional",
      image: threadtemplate1,
      template:
        "8 Things that are so useful but you're probably not aware of (all free):\n\n^1. Tool1\n\nSome paragraph.\n\nSuper helpful for:\n\n• Bullet1\n• Bullet1\n• Bullet1\n\n^2. Tool2\n\nSome Paragraph.\n\n•Bullet1.\n\n^3. Tool3\n\nSome Paragraph.\n\n• Bullet1\n\n^4. Tool4\n\nSome Paragraph.\n\n• Bullet1\n\n^5. Tool5\n\nSome Paragraph.\n\n• Bullet1\n\n^6. Tool6\n\nSome Paragraph.\n\n• Bullet1\n\n^7. Tool7\n\nSome Paragraph.\n\n• Bullet1\n\n^8. Tool8\n\nSome Paragraph.\n\n• Bullet1\n\n^Thanks for checking out this thread! Add more excellent Chrome extensions below. Follow \n@user\n for more.",
      tags: ["photography", "travel", "winter"],
    },
  ],
};

export const FunctionContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FunctionReducer, INITIAL_STATE);
  const { user } = useContext(AuthContext);
  console.log(user);

  const NEXT_PUBLIC_REQUEST_URL = process.env.NEXT_PUBLIC_REQUEST_URL;

  const PostThread = async () => {
    dispatch({ type: "SET_LOADING" });

    const res = await axios.post(`${NEXT_PUBLIC_REQUEST_URL}/tweet/thread`, {
      username: user.username,
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

  const GetThread = async () => {
    const receivedThreads = await axios.post(
      `${NEXT_PUBLIC_REQUEST_URL}/tweet`,
      {
        username: user.username,
      }
    );
    dispatch({ type: "SET_DRAFT_THREAD", payload: receivedThreads.data });
  };

  const UpdateThread = async () => {
    const receivedThreads = await axios.put(
      `${NEXT_PUBLIC_REQUEST_URL}/tweet/edit`,
      {
        threadId: state.currentThread._id,
        title: state.currentThread.title,
        threads: state.threads,
        scheduled: state.currentThread.scheduled,
        time: state.currentThread.time,
      }
    );
  };

  return (
    <FunctionContext.Provider
      value={{
        input: state.input,
        threads: state.threads,
        draftThreads: state.draftThreads,
        currentThread: state.currentThread,
        loading: state.loading,
        complete: state.complete,
        show: state.show,
        expand: state.expand,
        templates: state.templates,
        theme: state.theme,
        PostThread,
        GetThread,
        UpdateThread,
        dispatch,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

import { createContext, useReducer } from "react";

import threadtemplate1 from "../assets/threadtemplate1.png";

import PostReducer from "./reducer/PostReducer";

const INITIAL_STATE = {
  initial: true,
  input: "",
  mergedInput: "",
  threads: [],
  draftThreads: [],
  currentThread: {},
  schedule: false,
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

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  return (
    <PostContext.Provider
      value={{
        initial: state.initial,
        input: state.input,
        mergedInput: state.mergedInput,
        threads: state.threads,
        draftThreads: state.draftThreads,
        currentThread: state.currentThread,
        schedule: state.schedule,
        templates: state.templates,
        postDispatch: dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

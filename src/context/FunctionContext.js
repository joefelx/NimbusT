import { createContext, useState } from "react";
import axios from "axios";

export const FunctionContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [input, setInput] = useState("");
  const [thread, setThread] = useState([]);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);

  const PostThread = async () => {
    setLoading(true);
    const res = await axios.post("http://localhost:5000/thread", {
      username: "testfelix2",
      threadsList: thread,
      scheduled: false,
      date: "1677718800000",
    });
    console.log(thread);
    setLoading(false);
    setComplete(true);
    const comp = setInterval(() => {
      setComplete(false);
      clearInterval(comp);
    }, 1500);
    // clearTimeout(comp);
    console.log(res);
  };

  return (
    <FunctionContext.Provider
      value={{
        input,
        setInput,
        thread,
        setThread,
        PostThread,
        loading,
        complete,
        user,
        setUser,
        show,
        setShow,
        expand,
        setExpand,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

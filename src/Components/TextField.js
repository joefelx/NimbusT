import { useState, useEffect, useContext } from "react";
import "../styles/Home.module.css";
import NewThreadButton from "./NewThreadButton";

import { FunctionContext } from "../context/FunctionContext";
import splitText from "../utils/splitText";

const TextBox = () => {
  const { setInput } = useContext(FunctionContext);
  return (
    <textarea
      placeholder="Make a new thread by typing ^ to make heading"
      className="w-full min-h-screen h-full p-5 text-white bg-[#0a1128] focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap"
      onChange={(e) => {
        setInput(e.target.value);
      }}
    ></textarea>
  );
};

function TextField() {
  const { input, thread, setThread } = useContext(FunctionContext);
  // const [thread, setThread] = useState([]);

  useEffect(() => {
    setThread(splitText(input));
  }, [input]);

  return (
    <div className="input-box w-full">
      <TextBox />
    </div>
  );
}

export default TextField;

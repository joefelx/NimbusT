import { useEffect, useContext } from "react";
import "../styles/Home.module.css";

import { FunctionContext } from "../context/FunctionContext";
import { splitText } from "../utils/utils";

function TextField() {
  const { input, setInput, setThread } = useContext(FunctionContext);

  useEffect(() => {
    setThread(splitText(input));
  }, [input]);

  return (
    <div className="input-box w-full">
      <textarea
        placeholder="Make a new thread by typing ^ to make heading"
        className="w-full min-h-screen h-full p-5 text-white bg-[#0a1128] focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default TextField;

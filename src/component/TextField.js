import { useContext, useEffect } from "react";
import { FunctionContext } from "../context/FunctionContext";
import { handleResize, splitText } from "../utils/utils";

function TextField() {
  const { input, theme, dispatch } = useContext(FunctionContext);

  useEffect(() => {
    dispatch({ type: "SET_THREAD", payload: splitText(input) });
    handleResize("#textField");
  }, [input]);

  return (
    <textarea
      placeholder="Make a new thread by typing ^ to make heading"
      id="textField"
      className="flex-1 bg-black text-white min-h-screen p-5 focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap"
      value={input}
      onChange={(e) => {
        handleResize("#textField");
        dispatch({ type: "SET_INPUT", payload: e.target.value });
      }}
    ></textarea>
  );
}

export default TextField;

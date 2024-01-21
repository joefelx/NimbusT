import { useContext, useEffect } from "react";
import { FunctionContext } from "../context/FunctionContext";
import { handleResize, splitText } from "../utils/utils";

function TextField({ className }) {
  const { input, dispatch } = useContext(FunctionContext);

  useEffect(() => {
    dispatch({ type: "SET_THREAD", payload: splitText(input) });
    handleResize("#textField");
  }, [input]);

  return (
    <textarea
      placeholder="Make a new thread by typing ^ to make heading"
      id="textField"
      className={`flex w-full h-full text-white bg-slate-900 p-5 focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap ${className}`}
      value={input}
      onChange={(e) => {
        dispatch({ type: "SET_INPUT", payload: e.target.value });
      }}
    ></textarea>
  );
}

function Writer() {
  return (
    <div className="flex h-full bg-red-100">
      <TextField />
    </div>
  );
}

export default Writer;
export { TextField };

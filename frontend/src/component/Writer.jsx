import usePost from "../hook/usePost";

function TextField({ className }) {
  const { input, mergedInput, FormatInput, postDispatch } = usePost();

  return (
    <textarea
      placeholder="Make a new thread by typing ^ to make heading"
      id="textField"
      className={`flex w-full h-full text-white bg-slate-900 p-5 overflow-y-scroll focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap ${className}`}
      value={input}
      onPaste={(e) => {
        FormatInput(e.target.value);
        postDispatch({
          type: "SET_INPUT",
          payload: mergedInput,
        });
      }}
      onChange={(e) => {
        FormatInput(e.target.value);
        postDispatch({ type: "SET_INPUT", payload: e.target.value });
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

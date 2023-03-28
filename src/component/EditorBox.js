import { useContext } from "react";
import { FunctionContext } from "../context/FunctionContext";
import { ToolContext } from "../context/ToolContext";

import TextField from "./TextField";
import ThreadBox from "./ThreadBox";

import Templates from "./Templates";
import Calendar from "./Calendar";
import Draft from "./Draft";

const Editor = () => {
  const { thread } = useContext(FunctionContext);
  return (
    <>
      <TextField />
      <div className="flex flex-col flex-1 items-center">
        {/* thread detail */}
        {thread.map((t) => {
          if (t === "") {
            return "";
          }
          return <ThreadBox thread={t} imageURL="" />;
        })}
      </div>
    </>
  );
};

function EditorBox() {
  const { editor, templates, calendar, draft } = useContext(ToolContext);

  return (
    <div className="flex bg-black rounded-2xl h-[90vh] overflow-scroll overflow-x-hidden p-3 my-5">
      {editor && <Editor />}
      {templates && <Templates />}
      {calendar && <Calendar />}
      {draft && <Draft />}
    </div>
  );
}

export default EditorBox;

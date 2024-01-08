import { ToolContext } from "../context/ToolContext";
import { FunctionContext } from "../context/FunctionContext";

import { useContext } from "react";

function Tools() {
  const buttonStyle =
    "bg-white text-black border-b-2 border-slate-500 rounded-xl w-24 h-10";

  const { dispatchTool, editor, templates, calendar, draft } =
    useContext(ToolContext);
  const { PostThread, UpdateThread } = useContext(FunctionContext);

  return (
    <div className="px-5 py-3 bg-slate-900 border-2 border-slate-700 text-white flex justify-between rounded-2xl">
      <div className="flex-[1] flex">
        <button
          className={`cursor-pointer mr-5 border-b-2 border-slate-500 rounded-xl w-24 h-10 ${
            editor && buttonStyle
          }`}
          onClick={() => dispatchTool({ type: "OPEN_EDITOR" })}
        >
          Editor
        </button>
        <button
          className={`cursor-pointer ml-5 border-b-2 border-slate-500 rounded-xl w-24 h-10 ${
            templates && buttonStyle
          }`}
          onClick={() => dispatchTool({ type: "OPEN_TEMPLATES" })}
        >
          Templates
        </button>
        {/* <button
          className={`cursor-pointer  border-b-2 border-slate-500 rounded-xl w-24 h-10 ${
            calendar && buttonStyle
          }`}
          onClick={() => dispatchTool({ type: "OPEN_CALENDAR" })}
        >
          Calendar
        </button>
        <button
          className={`cursor-pointer  border-b-2 border-slate-500 rounded-xl w-24 h-10 ${
            draft && buttonStyle
          }`}
          onClick={() => dispatchTool({ type: "OPEN_DRAFT" })}
        >
          Draft
        </button> */}
      </div>
      {/* Publish */}
      <div className=" flex-1 flex justify-end">
        {draft && (
          <button
            className={`cursor-pointer  border-b-2 border-slate-500 rounded-xl w-24 h-10 ${
              draft && buttonStyle
            }`}
            onClick={UpdateThread}
          >
            Save
          </button>
        )}
        <button
          className="bg-[#000] border-2 border-slate-500 rounded-xl w-24 h-10 ml-5"
          onClick={PostThread}
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default Tools;

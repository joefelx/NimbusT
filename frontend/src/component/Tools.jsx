import { ToolContext } from "../context/ToolContext";
import { FunctionContext } from "../context/FunctionContext";

import { useContext, useState } from "react";
import { Button } from "./index";

function Tools() {
  const [active, setActive] = useState("writer");
  const { writer, templates, scheduler, dispatchTool } =
    useContext(ToolContext);
  const { dispatch, PostThread } = useContext(FunctionContext);

  return (
    <div className="px-1 py-1 my-5 bg-slate-900 text-white flex justify-between border-2 border-slate-700 rounded-2xl">
      <div className="flex justify-between w-2/12">
        <button
          className={`${writer && "bg-slate-800"}  py-2 px-3 rounded-xl`}
          onClick={() => dispatchTool({ type: "OPEN_WRITER" })}
        >
          Writer
        </button>
        <button
          className={`${templates && "bg-slate-800"} py-2 px-3 rounded-xl`}
          onClick={() => dispatchTool({ type: "OPEN_TEMPLATES" })}
        >
          Templates
        </button>
        <button
          className={`${scheduler && "bg-slate-800"} py-2 px-3 rounded-xl `}
          onClick={() => dispatchTool({ type: "OPEN_SCHEDULER" })}
        >
          Schedules
        </button>
      </div>
      {/* Publish */}
      <div className="flex justify-end bg-slate-800 rounded-xl">
        <button
          className="py-2 px-3 rounded-xl"
          onClick={() => dispatch({ type: "SET_SCHEDULE", payload: true })}
        >
          Schedule
        </button>
        <button
          className="py-2 px-3 bg-indigo-600 rounded-xl"
          onClick={PostThread}
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default Tools;

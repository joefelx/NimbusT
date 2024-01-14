import { ToolContext } from "../context/ToolContext";
import { FunctionContext } from "../context/FunctionContext";

import { useContext, useState } from "react";
import { Button } from "./index";

function Tools() {
  const [activeTab, setActiveTab] = useState("");
  const { dispatchTool } = useContext(ToolContext);
  const { PostThread, UpdateThread, dispatch } = useContext(FunctionContext);

  return (
    <div className="bg-black text-white flex justify-between px-2">
      <div className="flex-1 flex">
        <button
          className={`px-4 py-3 shadow-2xl ${
            activeTab === "writer" ? "bg-slate-900" : "bg-black"
          }`}
          onClick={() => {
            setActiveTab("writer");
            dispatchTool({ type: "OPEN_WRITER" });
          }}
        >
          Writer
        </button>

        <button
          className={`px-4 py-3 shadow-2xl ${
            activeTab === "template" ? "bg-slate-900" : "bg-black"
          }`}
          onClick={() => {
            setActiveTab("template");
            dispatchTool({ type: "OPEN_TEMPLATES" });
          }}
        >
          Templates
        </button>
        <button
          className={`px-4 py-3 shadow-2xl ${
            activeTab === "schedule" ? "bg-slate-900" : "bg-black"
          }`}
          onClick={() => {
            setActiveTab("schedule");
            dispatchTool({ type: "OPEN_SCHEDULER" });
          }}
        >
          Scheduled
        </button>
      </div>
      {/* Publish */}
      <div className="flex-1 flex justify-end p-1">
        <button
          className="mr-2 bg-slate-700 px-4 py-1 border border-slate-600 rounded-xl"
          onClick={() => dispatch({ type: "SET_SCHEDULE", payload: true })}
        >
          Schedule
        </button>
        <button
          className="mr-2 bg-indigo-600 px-4 py-1 border border-slate-600 rounded-xl"
          onClick={PostThread}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Tools;

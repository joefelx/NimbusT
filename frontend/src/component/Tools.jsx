import { ToolContext } from "../context/ToolContext";
import { FunctionContext } from "../context/FunctionContext";

import { useContext } from "react";
import { Button } from "./index";

function Tools() {
  const { dispatchTool } = useContext(ToolContext);
  const { PostThread, UpdateThread } = useContext(FunctionContext);

  return (
    <div className="px-5 py-3 bg-slate-900 text-white flex justify-between rounded-2xl">
      <div className="flex justify-between w-3/12">
        <Button
          buttonName="Editor"
          className="border-none"
          clickFun={() => dispatchTool({ type: "OPEN_WRITER" })}
        />
        <Button
          buttonName="Templates"
          className="border-none"
          clickFun={() => dispatchTool({ type: "OPEN_TEMPLATES" })}
        />
        <Button
          buttonName="Scheduler"
          className="border-none"
          clickFun={() => dispatchTool({ type: "OPEN_SCHEDULER" })}
        />
      </div>
      {/* Publish */}
      <div className="flex justify-end">
        <Button
          buttonName="Publish"
          textColor="black"
          className="bg-blue-500 border-none"
          clickFun={PostThread}
        />
      </div>
    </div>
  );
}

export default Tools;

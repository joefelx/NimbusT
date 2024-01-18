import { useContext } from "react";
import { ToolContext } from "../context/ToolContext";

import { Writer, Templates, Scheduler, Draft } from "./index";

function EditorBox() {
  const { writer, templates, scheduler, draft } = useContext(ToolContext);

  return (
    <div className="h-auto flex bg-black rounded-2xl  overflow-hidden">
      {writer && <Writer />}
      {templates && <Templates />}
      {scheduler && <Scheduler />}
      {draft && <Draft />}
    </div>
  );
}

export default EditorBox;

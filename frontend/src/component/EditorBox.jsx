import { useContext } from "react";
import { ToolContext } from "../context/ToolContext";

import { Writer, Templates, Schedule, Draft } from "./index";

function EditorBox() {
  const { writer, templates, scheduler, draft } = useContext(ToolContext);

  // rounded-2xl border-2 border-slate-700
  return (
    <div className="h-auto flex bg-black overflow-hidden">
      {writer && <Writer />}
      {templates && <Templates />}
      {scheduler && <Schedule />}
      {draft && <Draft />}
    </div>
  );
}

export default EditorBox;

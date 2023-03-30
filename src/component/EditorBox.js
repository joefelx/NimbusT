import { useContext } from "react";
import { ToolContext } from "../context/ToolContext";

import { Editor, Templates, Calendar, Draft } from "./Component";

function EditorBox() {
  const { editor, templates, calendar, draft } = useContext(ToolContext);

  return (
    <div className="flex bg-slate-900 rounded-2xl border-2 border-slate-700 min-h-[90vh] h-auto overflow-y-hidden overflow-x-hidden p-3 my-5">
      {editor && <Editor />}
      {templates && <Templates />}
      {calendar && <Calendar />}
      {draft && <Draft />}
    </div>
  );
}

export default EditorBox;

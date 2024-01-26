import { Writer, Templates, Scheduler } from "./index";
import useTool from "../hook/useTool";

function EditorBox() {
  const { writer, template, scheduler } = useTool();

  return (
    <div className="h-full rounded-2xl border-2 border-slate-700 overflow-hidden">
      {writer && <Writer />}
      {template && <Templates />}
      {scheduler && <Scheduler />}
    </div>
  );
}

export default EditorBox;

import { useContext } from "react";
import { ToolContext } from "../context/ToolContext";

import { Writer, Templates, Scheduler, Draft } from "./index";

function EditorBox() {
  const { writer, templates, scheduler, draft } = useContext(ToolContext);

  return (
    <>
      {writer && <Writer />}
      {templates && <Templates />}
      {scheduler && <Scheduler />}
      {draft && <Draft />}
    </>
  );
}

export default EditorBox;

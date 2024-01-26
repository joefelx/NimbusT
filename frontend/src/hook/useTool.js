import { ToolContext } from "../context/ToolContext";
import { useContext } from "react";

const useTool = () => {
  const { writer, template, scheduler, toolsDispatch } =
    useContext(ToolContext);

  function DispatchWriter() {
    toolsDispatch({ type: "OPEN_WRITER" });
  }
  function DispatchTemplate() {
    toolsDispatch({ type: "OPEN_TEMPLATES" });
  }
  function DispatchScheduler() {
    toolsDispatch({ type: "OPEN_SCHEDULER" });
  }

  return {
    writer,
    template,
    scheduler,
    DispatchWriter,
    DispatchTemplate,
    DispatchScheduler,
  };
};

export default useTool;

import usePost from "../hook/usePost";
import useTool from "../hook/useTool";

function Tools() {
  const { postDispatch, PostThread } = usePost();

  const {
    writer,
    template,
    scheduler,
    DispatchWriter,
    DispatchTemplate,
    DispatchScheduler,
  } = useTool();

  return (
    <div className="px-1 py-1 my-5 bg-slate-900 text-white flex justify-between border-2 border-slate-700 rounded-2xl">
      <div className="flex justify-between w-2/12">
        <button
          className={`${writer && "bg-slate-800"}  py-2 px-3 rounded-xl`}
          onClick={() => DispatchWriter()}
        >
          Writer
        </button>
        <button
          className={`${template && "bg-slate-800"} py-2 px-3 rounded-xl`}
          onClick={() => DispatchTemplate()}
        >
          Templates
        </button>
        <button
          className={`${scheduler && "bg-slate-800"} py-2 px-3 rounded-xl `}
          onClick={() => DispatchScheduler()}
        >
          Schedules
        </button>
      </div>
      {/* Publish */}
      <div className="flex justify-end bg-slate-800 rounded-xl">
        <button
          className="py-2 px-3 rounded-xl"
          onClick={() => postDispatch({ type: "SET_SCHEDULE", payload: true })}
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

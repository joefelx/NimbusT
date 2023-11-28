import { useContext, useEffect } from "react";

import { FunctionContext } from "../context/FunctionContext";
import { mergeText } from "../utils/utils";
import { TextField } from ".";

function Draft() {
  const { GetThread, draftThreads, dispatch } = useContext(FunctionContext);

  function setDraftThread(currentThread) {
    dispatch({
      type: "SET_CURRENT_THREAD",
      payload: currentThread,
    });
  }

  useEffect(() => {
    GetThread();
  }, []);

  return (
    <div className="w-full h-full flex">
      {/* left */}
      <aside className="h-full pl-3 pr-6 flex-1 border-r-2 border-slate-700 overflow-y-scroll">
        <h1 className="text-xl">Tweets</h1>
        {/* Draft thread button */}
        {draftThreads.map((d) => (
          <div
            className="p-5 bg-slate-800 rounded-xl my-2 cursor-pointer hover:bg-slate-700"
            onClick={() => {
              setDraftThread(d);
              dispatch({
                type: "SET_INPUT",
                payload: mergeText(d.threads),
              });
            }}
          >
            <p>{d?.title}</p>
          </div>
        ))}
      </aside>
      {/* right */}
      <section className="flex-[4] px-6">
        <TextField className="w-full" />
      </section>
    </div>
  );
}

export default Draft;

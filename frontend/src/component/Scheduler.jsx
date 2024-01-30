import { useContext, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";

import { formatDate, truncateStr, mergeText } from "../utils/utils";
import { ToolContext } from "../context/ToolContext";
import usePost from "../hook/usePost";

const Post = ({ p }) => {
  const { postDispatch } = usePost();
  const { toolsDispatch } = useContext(ToolContext);

  function OpenThread(p) {
    if (p.threads.length < 1) {
      postDispatch({ type: "SET_INPUT", payload: p.title });
    } else {
      let threadString = mergeText(p.threads);
      postDispatch({ type: "SET_INPUT", payload: threadString });
    }
    toolsDispatch({ type: "OPEN_WRITER" });
  }

  function DeleteClicked(p) {
    console.log(p);
  }

  return (
    <div className="w-full h-14 py-2 my-2 text-center flex justify-between  border border-slate-700 rounded-lg hover:bg-slate-700">
      <h1
        className="flex-1 flex justify-center items-center cursor-pointer"
        onClick={() => OpenThread(p)}
      >
        {truncateStr(p.title, 26)}
      </h1>
      <span className="flex-1 flex justify-center items-center">
        {formatDate(p.date)}
      </span>
      <span className="flex-1 flex justify-center items-center">
        {p.scheduled ? (
          <IoCalendarOutline className="w-10 h-6 aspect-square text-blue-500" />
        ) : (
          <IoCheckmarkDoneCircleOutline className="w-10 h-7 aspect-square text-green-500" />
        )}
      </span>
      <span className="flex-1 flex justify-center items-center">
        <MdDeleteOutline
          className="w-10 h-6 aspect-square text-red-500 cursor-pointer"
          onClick={() => DeleteClicked(p)}
        />
      </span>
    </div>
  );
};

const RenderPost = ({ draftThreads }) => {
  return (
    <div className="h-full overflow-scroll">
      {draftThreads.map((p, index) => (
        <Post key={index} p={p} />
      ))}
    </div>
  );
};

function Schedule() {
  const { draftThreads, GetThread } = usePost();

  useEffect(() => {
    GetThread();
  }, []);

  return (
    <div className="w-full min-h-16 py-2 px-5 h-full flex items-center justify-between">
      <div className="w-full h-full">
        <div className="w-full py-2 flex justify-between text-slate-500">
          <span className="flex-1 flex items-center justify-center">Posts</span>
          <span className="flex-1 flex items-center justify-center">Date</span>
          <span className="flex-1 flex items-center justify-center">
            Status
          </span>
          <span className="flex-1 flex items-center justify-center">
            Delete
          </span>
        </div>
        {draftThreads ? (
          <RenderPost draftThreads={draftThreads} />
        ) : (
          <p>No Posts</p>
        )}
      </div>
    </div>
  );
}

export default Schedule;

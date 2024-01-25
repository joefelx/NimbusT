import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { formatDate, truncateStr, mergeText } from "../utils/utils";
import useAuth from "../hook/useAuth";
import { FunctionContext } from "../context/FunctionContext";
import { ToolContext } from "../context/ToolContext";

const Post = ({ p }) => {
  const { dispatch } = useContext(FunctionContext);
  const { dispatchTool } = useContext(ToolContext);

  function OpenThread(p) {
    if (p.threads.length < 1) {
      dispatch({ type: "SET_INPUT", payload: p.title });
    } else {
      let threadStr = mergeText(p.threads);
      dispatch({ type: "SET_INPUT", payload: threadStr });
    }
    dispatchTool({ type: "OPEN_WRITER" });
  }

  return (
    <div
      className="w-full h-14 py-2 my-2 text-center flex justify-between cursor-pointer border border-slate-700 rounded-lg hover:bg-slate-700"
      onClick={() => OpenThread(p)}
    >
      <h1 className="flex-1 flex justify-center items-center">
        {truncateStr(p.title, 26)}
      </h1>
      <span className="flex-1 flex justify-center items-center">
        {formatDate(p.date)}
      </span>
      <span className="flex-1 flex justify-center items-center">
        {p.scheduled ? "Scheduled" : "Posted"}
      </span>
    </div>
  );
};

function Schedule() {
  const [scheduledPost, setScheduledPost] = useState([]);
  const { user } = useAuth();

  const getThreads = async () => {
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_REQUEST_URL}/post`,
          {
            username: user.username,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((res) => setScheduledPost(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <div className="w-full min-h-16 h-full flex items-center justify-between">
      <div className="w-full h-full  p-5">
        <div className="w-full flex justify-between text-slate-500">
          <h1 className="flex-1 flex items-center justify-center">Posts</h1>
          <span className="flex-1 flex items-center justify-center">Date</span>
          <span className="flex-1 flex items-center justify-center">
            Status
          </span>
        </div>
        <div className="h-full my-2 overflow-scroll">
          {scheduledPost ? (
            scheduledPost.map((p) => <Post p={p} />)
          ) : (
            <p>No Posts</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Schedule;

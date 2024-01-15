import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { formatDate } from "../utils/utils";

function Schedule() {
  const [scheduledPost, setScheduledPost] = useState([]);
  const { user } = useContext(AuthContext);

  const Post = ({ p }) => {
    return (
      <div className="w-full py-2 my-2 flex justify-between cursor-pointer border border-slate-700 rounded-lg hover:bg-slate-700">
        <h1 className="flex-1 flex items-center justify-center">{p.title}</h1>
        <span className="flex-1 flex items-center justify-center">
          {formatDate(p.date)}
        </span>
        <span className="flex-1 flex items-center justify-center">
          {p.scheduled ? "Scheduled" : "Posted"}
        </span>
      </div>
    );
  };

  const getThreads = async () => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_REQUEST_URL}/tweet/get/schedule`, {
        username: user.username,
      })
      .then((res) => setScheduledPost(res.data.data.scheduled));
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <div className="w-full min-h-16 h-auto flex items-center justify-between">
      <div className="w-full h-full px-5">
        <div className="w-full pb-5 flex justify-between text-slate-500">
          <h1 className="flex-1 flex items-center justify-center">Posts</h1>
          <span className="flex-1 flex items-center justify-center">Date</span>
          <span className="flex-1 flex items-center justify-center">
            Status
          </span>
        </div>
        {scheduledPost.map((p) => (
          <Post p={p} />
        ))}
      </div>
    </div>
  );
}

export default Schedule;

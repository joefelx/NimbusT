import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

function Scheduler() {
  const [value, onChange] = useState(new Date());

  const [scheduledPost, setScheduledPost] = useState([
    {
      id: 0,
      post: "This is the post",
      date: "10 Jan 2024",
      status: true,
    },
  ]);

  const Post = ({ p }) => {
    return (
      <div className="w-full py-2 flex justify-between cursor-pointer border border-slate-700 rounded-lg hover:bg-slate-700">
        <h1 className="flex-1 flex items-center justify-center">{p.post}</h1>
        <span className="flex-1 flex items-center justify-center">
          {p.date}
        </span>
        <span className="flex-1 flex items-center justify-center">
          {p.status ? "Posted" : "Scheduled"}
        </span>
      </div>
    );
  };

  useEffect(() => {
    // console.log(value);
  }, [value]);

  return (
    <div className="w-full min-h-16 h-auto flex items-center justify-between">
      <div className=" w-3/12 flex flex-col items-center border-r-2 border-slate-500">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="w-9/12 flex flex-col items-center px-5">
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

export default Scheduler;

import React from "react";

function Draft() {
  const data = [
    {
      id: 0,
      title: "8 things with AI tool",
      thread: ["lsjfeowi", "aifsfiej", "ahfieofoe"],
      scheduled: true,
      time: "019030239039",
    },
    {
      id: 1,
      title: "8 things with AI tool",
      thread: ["lsjfeowi", "aifsfiej", "ahfieofoe"],
      scheduled: true,
      time: "019030239039",
    },
    {
      id: 2,
      title: "8 things with AI tool",
      thread: ["lsjfeowi", "aifsfiej", "ahfieofoe"],
      scheduled: true,
      time: "019030239039",
    },
    {
      id: 3,
      title: "8 things with AI tool",
      thread: ["lsjfeowi", "aifsfiej", "ahfieofoe"],
      scheduled: true,
      time: "019030239039",
    },
    {
      id: 4,
      title: "8 things with AI tool",
      thread: ["lsjfeowi", "aifsfiej", "ahfieofoe"],
      scheduled: true,
      time: "019030239039",
    },
  ];
  return (
    <div className="w-full h-full flex">
      {/* left */}
      <aside className="h-full pl-3 pr-6 flex-1 border-r-2 border-slate-700 overflow-y-scroll">
        <h1 className="text-xl">Tweets</h1>
        {data.map((d) => (
          <div className="p-5 bg-slate-800 rounded-xl my-2 cursor-pointer hover:bg-slate-700">
            <p>{d.title}</p>
          </div>
        ))}
      </aside>
      {/* right */}
      <section className="flex-[4] px-6">
        {data.map((d) => (
          <p>{d.thread[0]}</p>
        ))}
      </section>
    </div>
  );
}

export default Draft;

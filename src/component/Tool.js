import React from "react";

function Tool() {
  const buttonStyle =
    "bg-white text-black border-2 border-slate-500 rounded-xl w-24 h-10";
  return (
    <div className="px-12">
      <div className="px-5 py-3 bg-black text-white flex justify-between rounded-2xl">
        <div className="flex-[1] flex justify-between">
          <button className={buttonStyle}>Editor</button>
          <button>Templates</button>
          <button>Calendar</button>
          <button>Draft</button>
        </div>
        {/* Publish */}
        <div className=" flex-1 flex justify-end">
          <button className="bg-[#000] border-2 border-slate-500 rounded-xl w-24 h-10">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tool;

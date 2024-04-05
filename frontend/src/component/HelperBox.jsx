import React from "react";

function HelperBox() {
  return (
    <div className="px-1 py-1 bg-slate-900 text-white flex justify-between border-2 border-slate-700 rounded-2xl">
      <div className="flex justify-between p-2">
        <span className="text-indigo-500 capitalize">
          Use ^ to create a new thread
        </span>
      </div>
    </div>
  );
}
export default HelperBox;

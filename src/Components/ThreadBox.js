import React from "react";

function ThreadBox({ thread }) {
  return (
    <div className=" bg-white text-black w-2/3 p-5">
      <p>{thread}</p>
    </div>
  );
}

export default ThreadBox;

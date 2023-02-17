import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo-individual transparent.png";
import ProfileImg from "../assets/profile.jpg";
import Image from "next/image";
import TextField from "./TextField";
import NewThreadButton from "./NewThreadButton";
import Tools from "./Tools";
import ThreadBox from "./ThreadBox";

function Editor() {
  return (
    <div className="h-auto min-h-screen w-100% bg-[#0a1128] text-white flex justify-between">
      {/* Editor */}
      <div className="flex-1 flex justify-evenly border-r-2 py-5">
        <TextField />
      </div>
      {/* Tool */}
      <Tools />
      {/* Preview */}
      <div className=" flex-1 ">
        {/* box */}
        <div className="flex items-center flex-col">
          {/* profile image and name */}
          <div className="flex  items-center bg-white text-black w-2/3 p-5">
            <div className="w-[50px] aspect-square rounded-full overflow-hidden">
              <Image src={ProfileImg} className=" object-cover" />
            </div>
            <span className="ml-3">
              <p className="text-[15px] font-semibold">Joe Felix</p>
              <p className=" text-[12px] text-slate-500">@joefelx</p>
            </span>
          </div>
          {/* thread detail */}
          <ThreadBox
            thread="1/ Performance review: Early in May, we made the most important
              parts of your docs now load in priority order. The result? Large
              doc are loading up to 60% faster 🏎️ 💨"
          />
          <ThreadBox
            thread="2/ Performance review: Early in May, we made the most important
              parts of your docs now load in priority order. The result? Large
              doc are loading up to 60% faster 🏎️ 💨"
          />
          <ThreadBox
            thread="3/ Performance review: Early in May, we made the most important
              parts of your docs now load in priority order. The result? Large
              doc are loading up to 60% faster 🏎️ 💨"
          />
          <ThreadBox
            thread="4/ Performance review: Early in May, we made the most important
              parts of your docs now load in priority order. The result? Large
              doc are loading up to 60% faster 🏎️ 💨"
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;

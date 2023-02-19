import { useContext } from "react";
import Image from "next/image";
import { FunctionContext } from "../context/FunctionContext";
import { TextField, Tools, ThreadBox } from "./Components";
import { Loading, Tick } from "./Graphics.js";

import Logo from "../assets/Logo-individual transparent.png";
import ProfileImg from "../assets/profile.jpg";

function Editor() {
  const { thread, loading, complete } = useContext(FunctionContext);

  return (
    <div className="h-auto min-h-screen w-100% bg-[#0a1128] text-white flex justify-between">
      {loading && <Loading />}
      {complete && <Tick />}
      {/* Editor */}
      <div className="flex-1 flex justify-evenly py-5">
        <TextField />
      </div>
      {/* Tool */}
      <Tools />
      {/* Preview */}
      <div className="flex-1">
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
          {thread.map((t) => (
            <ThreadBox thread={t} imageURL="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Editor;

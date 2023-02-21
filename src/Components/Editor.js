import { useContext } from "react";
import Image from "next/image";
import { FunctionContext } from "../context/FunctionContext";
import { TextField, Tools, ThreadBox, SideBar } from "./Components";
import { Loading, Tick } from "./Graphics.js";

import Logo from "../assets/Logo-individual transparent.png";
import ProfileImg from "../assets/profile.jpg";

function Editor() {
  const { thread, loading, complete } = useContext(FunctionContext);

  return (
    <div className="h-auto min-h-screen w-full bg-[#0a1128] text-white flex justify-between">
      {loading && <Loading />}
      {complete && <Tick />}
      <SideBar />
      {/* Editor */}
      <div className="flex-1 ">
        <TextField />
      </div>
      {/* Tool */}
      {/* <Tools /> */}
      {/* Preview */}
      <div className="flex-1">
        {/* box */}
        <div className="flex items-center flex-col">
          {/* thread detail */}
          {thread.map((t) => {
            {
              if (t == "") {
                return "";
              }
              return <ThreadBox thread={t} imageURL="" />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Editor;

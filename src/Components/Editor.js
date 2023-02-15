import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo-individual transparent.png";
import ProfileImg from "../assets/profile.jpg";
import Image from "next/image";
import TextField from "./TextField";
import NewThreadButton from "./NewThreadButton";
import Tools from "./Tools";

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
      <div className=" block flex-1"></div>
    </div>
  );
}

export default Editor;

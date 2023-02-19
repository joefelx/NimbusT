import { useContext } from "react";
import { FunctionContext } from "../context/FunctionContext";

import { RxFontBold, RxFontItalic } from "react-icons/rx";
import { BsImageFill, BsEmojiSmile } from "react-icons/bs";

function Tools() {
  const { PostThread } = useContext(FunctionContext);
  return (
    <div className="fixed bottom-0 w-full bg-black border-t-2 border-slate-600 flex items-center justify-between px-10 py-2">
      <ul className="w-[50%] cursor-pointer flex text-2xl items-center justify-between p-3">
        <li className="text-xl ">
          <BsEmojiSmile />
        </li>
        <li>
          <RxFontBold />
        </li>
        <li>
          <RxFontItalic />
        </li>
        <li className="text-xl">
          <BsImageFill />
        </li>
      </ul>
      <div>
        <button
          className="bg-[#1DA1F2] px-5 py-1 rounded-xl text-[14px] shadow-2xl"
          onClick={PostThread}
        >
          Tweet All
        </button>
      </div>
    </div>
  );
}

export default Tools;

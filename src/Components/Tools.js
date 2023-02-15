import { RxFontBold, RxFontItalic } from "react-icons/rx";
import { BsImageFill, BsEmojiSmile } from "react-icons/bs";

function Tools() {
  return (
    <div className="absolute bottom-[50px] left-0 right-0 w-[20rem] ml-auto mr-auto">
      <ul className=" cursor-pointer border-2 border-slate-600 rounded-xl bg-black flex text-2xl items-center justify-between mt-3 p-3">
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
    </div>
  );
}

export default Tools;

import { useState, useEffect } from "react";
import "../styles/Home.module.css";
import { RxFontBold, RxFontItalic } from "react-icons/rx";
import { BsImageFill, BsEmojiSmile } from "react-icons/bs";
import NewThreadButton from "./NewThreadButton";

function TextField({ addThread }) {
  const [input, setInput] = useState("");

  const handleResize = () => {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", (e) => {
      textarea.style.height = "63px";
      let scHeight = e.target.scrollHeight;
      textarea.style.height = `${scHeight}px`;
    });
  };

  useEffect(() => {
    handleResize();
  }, [input]);

  return (
    <div>
      <div>
        <div>
          <textarea
            maxLength={280}
            placeholder="Write the thread that makes fires"
            className="w-[30vw] h-auto p-2 text-white bg-[#0a1128] border-b-2 border-slate-600 overflow-hidden focus:outline-none placeholder:text-gray-600 resize-none"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></textarea>
        </div>
        {/* Tools */}
        <div>
          <ul className="flex text-2xl items-center justify-between mt-3">
            <li>
              <BsEmojiSmile />
            </li>
            <li>
              <RxFontBold />
            </li>
            <li>
              <RxFontItalic />
            </li>
            <li>
              <BsImageFill />
            </li>
          </ul>
        </div>
      </div>
      <NewThreadButton addThread={addThread} />
    </div>
  );
}

export default TextField;

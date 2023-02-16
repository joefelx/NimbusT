import { useState, useEffect } from "react";
import "../styles/Home.module.css";
import NewThreadButton from "./NewThreadButton";

const TextBox = ({ input, setInput }) => {
  return (
    <textarea
      placeholder="Write the thread that makes fires"
      className="w-full min-h-screen h-auto p-5 text-white bg-[#0a1128] border-b-2 border-slate-600 focus:outline-none placeholder:text-gray-600 resize-none"
      onChange={(e) => {
        setInput(e.target.value);
      }}
    ></textarea>
  );
};

function TextField() {
  const [input, setInput] = useState("");
  const [thread, setThread] = useState([]);

  const handleResize = () => {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", (e) => {
      textarea.style.height = "63px";
      let scHeight = e.target.scrollHeight;
      textarea.style.height = `${scHeight}px`;
    });
  };

  function addThread() {
    const inputBox = document.querySelector(".input-box");
    const textfield = document.createElement("textarea");
    textfield.maxLength = 280;
    textfield.placeholder = "Write the thread that makes fires";
    textfield.classList =
      "w-[30vw] h-auto p-2 text-white bg-[#0a1128] border-b-2 border-slate-600 overflow-hidden focus:outline-none placeholder:text-gray-600 resize-none";

    textfield.onChange = (e) => {
      setInput([...input, e.target.value]);
    };
    inputBox.appendChild(textfield);
  }

  function splitText(thread) {
    let word = thread.split("/");
    setThread(word);
  }

  useEffect(() => {
    handleResize();
    splitText(input);
  }, [input]);

  return (
    <div className="input-box w-full">
      <TextBox input={input} setInput={setInput} />
    </div>
  );
}

export default TextField;

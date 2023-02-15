import { useState, useEffect } from "react";
import "../styles/Home.module.css";
import NewThreadButton from "./NewThreadButton";

const TextBox = ({ input, setInput }) => {
  return (
    <div>
      <textarea
        placeholder="Write the thread that makes fires"
        className="w-[30vw] min-h-screen h-auto p-2 text-white bg-[#0a1128] border-b-2 border-slate-600 focus:outline-none placeholder:text-gray-600 resize-none"
        onChange={(e) => {
          setInput([e.target.value]);
        }}
      ></textarea>
    </div>
  );
};

function TextField() {
  const [input, setInput] = useState([]);

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

  useEffect(() => {
    handleResize();
    console.log(input);
  }, [input]);

  return (
    <div>
      <div className="input-box">
        <TextBox input={input} setInput={setInput} />
      </div>
      {/* <NewThreadButton addThread={addThread} /> */}
    </div>
  );
}

export default TextField;

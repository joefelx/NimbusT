import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { AuthContext } from "../context/AuthContext";
import { FunctionContext } from "../context/FunctionContext";
import { handleResize, splitText } from "../utils/utils";

import ProfileImg from "../assets/profile.jpg";

function ThreadBox({ thread, imageURL }) {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();

  const THREAD_LIMIT = 280;

  useEffect(() => {
    if (thread.length > THREAD_LIMIT) {
      // alert("More than 280, Try to write in new line");
    }
  }, [thread]);

  return (
    <div className="p-5 my-5 w-[25rem] bg-white text-black rounded-2xl">
      <div className="flex items-center">
        <div className="w-[50px] aspect-square rounded-full overflow-hidden">
          <Image
            src={ProfileImg}
            className=" object-cover"
            alt="ProfileImage"
          />
        </div>
        <span className="ml-3">
          <p className="text-[15px] font-semibold">
            {user ? user.name : "Harry"}
          </p>
          <p className=" text-[12px] text-slate-500">
            @{user ? user.username : "harry"}
          </p>
        </span>
      </div>
      <div className="py-5" id="threadBox">
        <p className=" whitespace-pre-wrap">{thread}</p>
        {imageURL && (
          <Image
            src={imageURL}
            className=" h-52 mt-4 object-cover rounded-lg"
            alt="Image preview"
          />
        )}
      </div>
    </div>
  );
}

function TextField({ className }) {
  const { input, dispatch } = useContext(FunctionContext);

  useEffect(() => {
    dispatch({ type: "SET_THREAD", payload: splitText(input) });
    handleResize("#textField");
  }, [input]);

  return (
    <textarea
      placeholder="Make a new thread by typing ^ to make heading"
      id="textField"
      className={`flex-1 text-white bg-slate-900 min-h-screen p-5 focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap ${className}`}
      value={input}
      onChange={(e) => {
        handleResize("#textField");
        dispatch({ type: "SET_INPUT", payload: e.target.value });
      }}
    ></textarea>
  );
}

function Editor() {
  const { threads } = useContext(FunctionContext);

  return (
    <>
      <TextField />
      <div className="flex flex-col flex-1 items-end bg-slate-900 px-5">
        {/* thread detail */}
        {threads.map((t) => {
          if (t === "") {
            return "";
          }
          return <ThreadBox thread={t} imageURL="" />;
        })}
      </div>
    </>
  );
}

export default Editor;
export { TextField };

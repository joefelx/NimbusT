import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FunctionContext } from "../context/FunctionContext";

import { Loading, Tick, Logo } from "./Graphics.js";
import { splitText } from "../utils/utils";

import ProfileImg from "../assets/profile.jpg";

import {
  HiOutlineCalendar,
  HiOutlineTemplate,
  HiOutlineChartBar,
  HiOutlineCollection,
  HiOutlineSave,
  HiOutlinePhotograph,
} from "react-icons/hi";

function SideBar() {
  const { expand, setExpand } = useContext(FunctionContext);
  return (
    <div
      className={` ${
        expand && "w-[15rem] rounded-r-lg border-r border-slate-500"
      } fixed z-50 h-screen bg-black p-5 flex flex-col items-center justify-between shadow-2xl `}
      onClick={() => setExpand(!expand)}
    >
      <div className="flex-1 flex items-center justify-evenly w-full">
        <div>
          {!expand ? (
            <Link href="/">
              <Logo />
            </Link>
          ) : (
            <Logo />
          )}
        </div>
        <Link href="/">
          {expand && (
            <h1 className="text-2xl font-black cursor-pointer">Nimbus</h1>
          )}
        </Link>
      </div>
      <div className="w-full flex justify-center flex-[4]">
        <ul
          className={`${
            expand && "mr-5"
          } flex flex-col items-center justify-evenly text-2xl text-slate-600`}
        >
          <li
            className={`flex items-center justify-evenly w-full  cursor-pointer ${
              !expand && "hover:text-white"
            } `}
          >
            <HiOutlineCalendar />
          </li>
          <li
            className={`flex items-center justify-evenly w-full  cursor-pointer ${
              !expand && "hover:text-white"
            } `}
          >
            <HiOutlineTemplate />
          </li>
          <li
            className={`flex items-center justify-evenly w-full  cursor-pointer ${
              !expand && "hover:text-white"
            } `}
          >
            <HiOutlineChartBar />
          </li>
          <li
            className={`flex items-center justify-evenly w-full  cursor-pointer ${
              !expand && "hover:text-white"
            } `}
          >
            <HiOutlineCollection />
          </li>
          <li
            className={`flex items-center justify-evenly w-full  cursor-pointer ${
              !expand && "hover:text-white"
            } `}
          >
            <HiOutlineSave />
          </li>
        </ul>
        <ul className="flex flex-col justify-evenly text-lg font-normal text-slate-600">
          <li className=" cursor-pointer hover:text-white">
            {expand && <p>Calendar</p>}
          </li>
          <li className=" cursor-pointer hover:text-white">
            {" "}
            {expand && <p>Templates</p>}
          </li>
          <li className=" cursor-pointer hover:text-white">
            {expand && <p>Grow</p>}
          </li>
          <li className=" cursor-pointer hover:text-white">
            {" "}
            {expand && <p>Draft</p>}
          </li>
          <li className=" cursor-pointer hover:text-white">
            {" "}
            {expand && <p>Download</p>}
          </li>
        </ul>
      </div>
    </div>
  );
}

function TextField() {
  const { input, setInput, setThread } = useContext(FunctionContext);

  useEffect(() => {
    setThread(splitText(input));
  }, [input]);

  return (
    // <div className="input-box w-full h-auto">
    <textarea
      placeholder="Make a new thread by typing ^ to make heading"
      className=" w-full min-h-screen p-5 text-white bg-[#0a1128] focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap"
      onChange={(e) => {
        setInput(e.target.value);
      }}
    ></textarea>
    // </div>
  );
}

function ThreadBox({ thread, imageURL }) {
  const [file, setFile] = useState();

  const THREAD_LIMIT = 280;

  useEffect(() => {
    if (thread.length > THREAD_LIMIT) {
      // alert("More than 280, Try to write in new line");
    }
  }, [thread]);

  return (
    <>
      <div className="flex items-center bg-white text-black w-3/4 p-5">
        <div className="w-[50px] aspect-square rounded-full overflow-hidden">
          <Image
            src={ProfileImg}
            className=" object-cover"
            alt="ProfileImage"
          />
        </div>
        <span className="ml-3">
          <p className="text-[15px] font-semibold">Joe Felix</p>
          <p className=" text-[12px] text-slate-500">@joefelx</p>
        </span>
      </div>
      <div className=" bg-white text-black w-3/4 p-5" id="threadBox">
        <p className=" whitespace-pre-wrap">{thread}</p>
        {imageURL && (
          <Image
            src={imageURL}
            className=" h-52 mt-4 object-cover rounded-lg"
            alt="Image preview"
          />
        )}
      </div>
      <div className=" w-3/4 p-5">
        <label
          id="inputField"
          htmlFor="imageInput"
          className="bg-white text-[#1DA1F2] text-lg border-2 border-[#1DA1F2] rounded-xl flex items-center justify-center p-2 cursor-pointer hover:bg-[#1DA1F2] hover:text-white"
        >
          <HiOutlinePhotograph />
          <input
            type="file"
            id="imageInput"
            className=" hidden"
            onChange={(e) => {
              console.log(e.target.files[0]);
            }}
          />
        </label>
      </div>
    </>
  );
}

function Editor() {
  const { thread, loading, complete, expand, setExpand } =
    useContext(FunctionContext);

  return (
    <div className="min-h-screen w-full bg-[#0a1128] text-white flex justify-between">
      {loading && <Loading />}
      {complete && <Tick />}
      <SideBar />
      {/* Editor */}
      <div
        className={`${expand && "blur-sm"} flex-[1.5] ml-[5rem] `}
        onClick={() => setExpand(false)}
      >
        <TextField />
      </div>

      <div className={`${expand && "blur-sm"} flex-1 `}>
        {/* box */}
        <div className=" flex flex-col bg-white items-center">
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

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FunctionContext } from "../context/FunctionContext";
import { AuthContext } from "@/context/AuthContext";

import { LoginCard, Button } from "./Components";
import { Loading, Tick, Logo } from "./Graphics.js";
import { handleResize, splitText } from "../utils/utils";

import ProfileImg from "../assets/profile.jpg";

import {
  HiOutlineCalendar,
  HiOutlineTemplate,
  HiOutlineChartBar,
  HiOutlineCollection,
  HiOutlineSave,
  HiOutlinePhotograph,
} from "react-icons/hi";

function Tools() {
  const { PostThread } = useContext(FunctionContext);
  return (
    <div className="fixed top-0 w-full bg-black flex items-center justify-between px-10 py-3">
      <div className="w-full flex items-center justify-end">
        <Button
          className="float-right mx-4"
          buttonName="Tweet"
          clickFun={PostThread}
          width={5}
          height={1}
          textColor="black"
          background="white" //#1DA1F2
          borderColor="[#CECECE]"
          hoverColor="[#CECECE]"
        />
        <Button
          className="float-right"
          buttonName="Schedule"
          clickFun={PostThread}
          width={5}
          height={1}
          textColor="black"
          background="white"
          borderColor="[#CECECE]"
          hoverColor="red-500"
        />
      </div>
    </div>
  );
}

function SideBar() {
  const { expand, dispatch } = useContext(FunctionContext);
  return (
    <div
      className={` ${
        expand && "w-[15rem] rounded-r-lg border-r border-slate-500"
      } fixed z-[40] h-screen bg-black p-5 flex flex-col items-center justify-between shadow-2xl`}
      onClick={() => dispatch({ type: "SET_EXPAND", payload: !expand })}
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
  const { input, dispatch } = useContext(FunctionContext);

  useEffect(() => {
    dispatch({ type: "SET_THREAD", payload: splitText(input) });
    handleResize("textarea");
  }, [input]);

  return (
    <textarea
      placeholder="Make a new thread by typing ^ to make heading"
      className=" w-full min-h-screen p-5 text-white bg-[#0a1128] focus:outline-none placeholder:text-gray-600 resize-none whitespace-pre-wrap"
      value={input}
      onChange={(e) => dispatch({ type: "SET_INPUT", payload: e.target.value })}
    ></textarea>
  );
}

function ThreadBox({ thread, imageURL }) {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  // console.log(user);

  const THREAD_LIMIT = 280;

  useEffect(() => {
    if (thread.length > THREAD_LIMIT) {
      // alert("More than 280, Try to write in new line");
    }
  }, []);

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
          <p className="text-[15px] font-semibold">
            {user ? user.name : "Harry"}
          </p>
          <p className=" text-[12px] text-slate-500">
            @{user ? user.username : "harry"}
          </p>
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
  const { thread, loading, show, complete, expand, dispatch } =
    useContext(FunctionContext);
  const { user, checkUser } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      checkUser();
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a1128] text-white flex justify-between">
      {loading && <Loading />}
      {complete && <Tick />}
      {show && <LoginCard />}
      <Tools />
      <SideBar />
      {/* Editor */}
      <div
        className={`${expand && "blur-sm"} flex-[1.5] ml-[5rem] mt-[3rem] `}
        onClick={() => dispatch({ type: "SET_EXPAND", payload: false })}
      >
        <TextField />
      </div>
      <div className={`${expand && "blur-sm"} flex-1 mt-[3rem] `}>
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

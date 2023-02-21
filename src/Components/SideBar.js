import { useState } from "react";
import { Logo } from "./Graphics";
import {
  HiOutlineCalendar,
  HiOutlineTemplate,
  HiOutlineChartBar,
  HiOutlineCollection,
  HiOutlineSave,
} from "react-icons/hi";
import Link from "next/link";

function SideBar() {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={` ${
        expand && "w-[15rem]"
      } h-screen bg-black p-5 flex flex-col items-center justify-between border-r border-slate-600`}
      onClick={() => setExpand(!expand)}
    >
      <div className="flex-1 flex items-center justify-evenly w-full">
        <div>
          <Logo />
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

export default SideBar;

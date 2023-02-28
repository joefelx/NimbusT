import { FunctionContext } from "@/context/FunctionContext";
import React, { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { BiExpandAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import Image from "next/image";

const TemplateBox = ({ img, onClick }) => {
  return (
    <div className="w-[20vw] h-[20vw] bg-black border-2 border-slate-600 rounded-xl m-2 overflow-hidden">
      <Image
        src={img}
        className="h-[20vw] object-cover cursor-pointer"
        alt="image"
        onClick={onClick}
      />
    </div>
  );
};

function Templates() {
  const { templates, dispatch } = useContext(FunctionContext);
  const router = useRouter();
  const menuBtnStyling = "cursor-pointer text-xl";

  return (
    <div className="fixed w-full h-full flex items-center justify-center backdrop-blur-sm z-50">
      <div className="w-[80vw] h-[90vh] bg-black border-2 border-slate-600 rounded-xl p-5 overflow-y-scroll">
        {/* box menu */}
        <ul className="flex justify-between">
          <li
            className={menuBtnStyling}
            onClick={() => {
              router.push("/templates");
            }}
          >
            <BiExpandAlt />
          </li>
          <li
            className={menuBtnStyling}
            onClick={() => {
              dispatch({ type: "OPEN_TEMPLATE", payload: false });
            }}
          >
            <HiOutlineX />
          </li>
        </ul>
        {/* templates */}
        <div className="grid grid-cols-3 gap-10">
          {templates.map((temp) => (
            <TemplateBox
              img={temp.img}
              onClick={() => {
                dispatch({ type: "SET_INPUT", payload: temp.text });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Templates;

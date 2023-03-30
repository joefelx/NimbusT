import { FunctionContext } from "../context/FunctionContext";
import React, { useContext } from "react";
import Image from "next/image";

const TemplateBox = ({ item, onClick }) => {
  return (
    <div
      key={item.id}
      className="overflow-hidden shadow-lg text-white border-2 border-slate-700 rounded-2xl cursor-pointer"
    >
      <Image
        className="w-full"
        src={item.image}
        alt="Mountain"
        onClick={onClick}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

function Templates2() {
  const { templates, dispatch } = useContext(FunctionContext);

  return (
    <div className="flex w-full justify-center">
      {/* templates */}
      <div className="grid grid-cols-3 gap-10">
        {templates.map((temp) => (
          <TemplateBox
            key={temp.id}
            img={temp.img}
            onClick={() => {
              dispatch({ type: "SET_INPUT", payload: temp.text });
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Templates() {
  const { templates, dispatch } = useContext(FunctionContext);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {templates.map((temp) => (
        <TemplateBox
          item={temp}
          onClick={() => {
            dispatch({ type: "SET_INPUT", payload: temp.template });
          }}
        />
      ))}
    </div>
  );
}

export default Templates;

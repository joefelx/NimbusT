import React from "react";
import toast from "react-hot-toast";

import usePost from "../hook/usePost";
import useTool from "../hook/useTool";

const TemplateBox = ({ item, onClick }) => {
  return (
    <div
      key={item.id}
      className="h-4/5 overflow-hidden shadow-lg text-white border-2 border-slate-700 rounded-2xl cursor-pointer"
    >
      <img
        className="w-full h-4/5"
        src={item.image.src}
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

function Templates() {
  const { templates, postDispatch } = usePost();
  const { DispatchWriter } = useTool();

  return (
    <div className="p-10 overflow-y-scroll grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {templates.map((temp) => (
        <TemplateBox
          item={temp}
          onClick={() => {
            toast.success("Template Loaded");
            postDispatch({ type: "SET_INPUT", payload: temp.template });
            DispatchWriter();
          }}
        />
      ))}
    </div>
  );
}

export default Templates;

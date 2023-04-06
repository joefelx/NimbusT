import { FunctionContext } from "../context/FunctionContext";
import { useContext, useEffect, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineInformationCircle,
  HiOutlineX,
} from "react-icons/hi";

import { MdSmsFailed } from "react-icons/md";

function Banner({ sign }) {
  const themeTemplate = {
    success: {
      icon: "success",
      description: "Your Tweet has been posted",
    },
    failed: {
      icon: "failed",
      description: "Your Tweet was not posted due to internal errors",
    },
    information: {
      icon: "information",
      description: "Template has been loaded",
    },
  };

  const [theme, setTheme] = useState({
    icon: "",
    description: "",
  });

  const { dispatch } = useContext(FunctionContext);

  setTimeout(() => {
    dispatch({
      type: "USE_BANNER",
      payload: {
        show: false,
        message: "information",
      },
    });
    clearTimeout();
  }, 10000);

  useEffect(() => {
    setTheme({
      icon: themeTemplate[sign].icon,
      description: themeTemplate[sign].description,
    });
  }, [sign]);

  return (
    <>
      <div className="absolute top-2 right-0 z-[500] border-l-4 bg-black border-slate-700 text-white p-4 rounded-md ">
        <div className="flex items-center space-x-4">
          <div className="">
            {theme.icon === "success" && (
              <HiOutlineCheckCircle className="h-6 w-6 text-green-600" />
            )}
            {theme.icon === "information" && (
              <HiOutlineInformationCircle className="h-6 w-6 text-indigo-600" />
            )}
            {theme.icon === "failed" && (
              <MdSmsFailed className="h-6 w-6 text-red-600" />
            )}
          </div>
          <div className="">
            <p className="text-sm font-medium text-white">
              {theme.description}
            </p>
          </div>
          <div>
            <HiOutlineX className="h-6 w-6 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

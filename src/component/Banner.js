import { FunctionContext } from "../context/FunctionContext";
import { useContext, useEffect, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineInformationCircle,
  HiOutlineX,
} from "react-icons/hi";

import { MdSmsFailed } from "react-icons/md";

function Banner({ sign, description }) {
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
        description: "Off",
      },
    });
    clearTimeout();
  }, 10000);

  useEffect(() => {
    setTheme({
      icon: themeTemplate[sign].icon,
      description: description,
    });
  }, [sign]);

  return (
    <>
      <div className="fixed top-5 left-0 right-0 flex justify-center items-center bg-transparent z-[500] rounded-md ">
        <div className="flex items-center space-x-4 border-2 bg-white border-slate-400 rounded-xl text-black p-4">
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
            <p className="text-sm font-medium">{theme.description}</p>
          </div>
          <div>
            <HiOutlineX
              className="h-6 w-6 cursor-pointer"
              onClick={() =>
                dispatch({
                  type: "USE_BANNER",
                  payload: {
                    show: false,
                    message: "information",
                    description: "Off",
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

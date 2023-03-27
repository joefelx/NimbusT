import { useEffect } from "react";
import { HiOutlineCheckCircle, HiOutlineX } from "react-icons/hi";

function Banner({ sign }) {
  const theme = {
    success: {
      icon: "HiOutlineCheckCircle",
      description: "Your Tweet has been posted",
    },
    failed: {
      icon: "HiOutlineCheckCircle",
      description: "Your Tweet has been posted",
    },
    information: {
      icon: "HiOutlineCheckCircle",
      description: "Your Tweet has been posted",
    },
  };

  useEffect(() => {}, [sign]);

  return (
    <>
      <div className="absolute top-2 right-0 z-[500] border-l-4 border-green-500 p-4 rounded-md bg-green-100">
        <div className="flex items-center space-x-4">
          <div className="">
            <HiOutlineCheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="">
            <p className="text-sm font-medium text-green-600">
              This is some informational text that you can use to show some
              success content
            </p>
          </div>
          <div>
            <HiOutlineX className="h-6 w-6 text-green-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

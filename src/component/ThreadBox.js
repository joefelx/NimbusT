import { useContext, useState, useEffect } from "react";
import Image from "next/image";

import { AuthContext } from "../context/AuthContext";

import ProfileImg from "../assets/profile.jpg";

import { HiOutlinePhotograph } from "react-icons/hi";

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

export default ThreadBox;

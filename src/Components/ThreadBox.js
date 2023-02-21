import Image from "next/image";
import ProfileImg from "../assets/profile.jpg";
import { useEffect } from "react";

function ThreadBox({ thread, imageURL }) {
  const THREAD_LIMIT = 280;

  useEffect(() => {
    if (thread.length > THREAD_LIMIT) {
      alert("More than 280, Try to write in new line");
    }
  }, [thread]);
  return (
    <>
      <div className="flex items-center bg-white text-black w-2/3 p-5">
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
      <div className=" bg-white text-black w-2/3 p-5">
        <p className=" whitespace-pre-wrap">{thread}</p>
        {imageURL && (
          <Image
            src={imageURL}
            className=" h-52 mt-4 object-cover rounded-lg"
            alt="Image preview"
          />
        )}
      </div>
    </>
  );
}

export default ThreadBox;

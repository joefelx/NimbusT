import Image from "next/image";

function ThreadBox({ thread, imageURL }) {
  return (
    <div className=" bg-white text-black w-2/3 p-5">
      <p className=" whitespace-pre-wrap">{thread}</p>
      {imageURL && (
        <Image src={imageURL} className=" h-52 mt-4 object-cover rounded-lg" />
      )}
    </div>
  );
}

export default ThreadBox;

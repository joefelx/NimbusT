import { BsPlusLg } from "react-icons/bs";

function NewThreadButton({ addThread }) {
  return (
    <button
      className="w-[30vw] flex items-center justify-center bg-white text-black py-2 mt-5 rounded-xl border-2 border-[#CECECE] "
      onClick={() => {
        addThread();
      }}
    >
      <BsPlusLg />
    </button>
  );
}

export default NewThreadButton;

import "../styles/Home.module.css";

function Tick() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center backdrop-blur-sm z-40">
      <svg
        className="w-[56px] h-[56px] rounded-[50%] block stroke-2 stroke-white m-[10%]  animate-ping"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="#1DA1F2"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
}

export default Tick;

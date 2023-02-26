import Editor from "./Editor";
import Hero from "./Hero";
import Navigation from "./Navigation";
import LoginCard from "./LoginCard";

const Button = ({
  buttonName,
  clickFun,
  width,
  height,
  textColor,
  background,
  borderColor,
  hoverColor,
  className,
}) => {
  return (
    <button
      className={`bg-${background} px-${width} py-${height} rounded-xl text-[14px] text-${textColor} shadow-2xl border-2 border-${borderColor} hover:bg-${hoverColor} ${className}`}
      onClick={clickFun}
    >
      {buttonName}
    </button>
  );
};

export { Editor, Hero, Navigation, LoginCard, Button };

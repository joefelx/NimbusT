import Editor from "./Editor";
import Hero from "./Hero";
import Navigation from "./Navigation";
import LoginCard from "./LoginCard";
import Templates from "./Templates";

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
  disabled,
}) => {
  return (
    <button
      className={`bg-${background} px-${width} py-${height} rounded-xl text-[14px] text-${textColor} shadow-2xl border-2 border-${borderColor} hover:bg-${hoverColor} ${className}`}
      onClick={clickFun}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

export { Editor, Hero, Navigation, LoginCard, Button, Templates };

import Editor from "./Editor";
import Hero from "./Hero";
import Navigation from "./Navigation";
import LoginCard from "./LoginCard";
import Templates from "./Templates";
import { Gradient, CornerGradient, Loading, Tick, Logo } from "./Graphics";

const Button = ({
  buttonName,
  clickFun,
  width,
  height,
  textColor,
  background,
  borderColor,
  className,
  disabled,
}) => {
  return (
    <button
      className={`z-1 bg-${background} px-${width} py-${height} rounded-xl text-[14px] text-${textColor} shadow-2xl border-2 border-${borderColor} ${className}`}
      onClick={clickFun}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

export {
  Editor,
  Hero,
  Navigation,
  LoginCard,
  Button,
  Templates,
  Gradient,
  CornerGradient,
  Loading,
  Tick,
  Logo,
};

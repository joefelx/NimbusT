import Writer from "./Writer";
import Hero from "./Hero";
import Navigation from "./Navigation";
import LoginCard from "./LoginCard";
import Templates from "./Templates";
import Scheduler from "./Scheduler";
import EditorBox from "./EditorBox";
import HelperBox from "./HelperBox";
import Features from "./Features";
import Footer from "./Footer";
import Tools from "./Tools";

import { Gradient, CornerGradient, Loading, Tick, Logo } from "./Graphics";

const Button = ({
  buttonName = "Button",
  width = 1,
  height = 2,
  paddingX = 0,
  paddingY = 0,
  textColor = "black",
  textSize = "",
  color = "white",
  borderColor = "slate-500",
  className = "",
  clickFun,
  disabled = false,
}) => {
  return (
    <button
      className={`z-1 bg-${color} px-${width} py-${height} rounded-xl text-[${textSize}] text-${textColor} shadow-2xl border-2 border-${borderColor} cursor-pointer ${className}`}
      onClick={clickFun}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

export {
  Writer,
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
  Scheduler,
  EditorBox,
  HelperBox,
  Features,
  Footer,
  Tools,
};

import Writer from "./Writer";
import Hero from "./Hero";
import Navigation from "./Navigation";
import LoginCard from "./LoginCard";
import Templates from "./Templates";
import Calendar from "./Calendar";
import Draft from "./Draft";
import EditorBox from "./EditorBox";
import Features from "./Features";
import Footer from "./Footer";
import Tools from "./Tools";
import { TextField } from "./Writer";

import { Gradient, CornerGradient, Loading, Tick, Logo } from "./Graphics";

const Button = ({
  buttonName = "Button",
  width = 24,
  height = 10,
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
      className={`z-1 bg-${color} h-${height} w-${width} px-${paddingX} py-${paddingY} rounded-xl text-[${textSize}] text-${textColor} shadow-2xl border-2 border-${borderColor} cursor-pointer ${className}`}
      onClick={clickFun}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

export {
  Writer,
  TextField,
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
  Calendar,
  Draft,
  EditorBox,
  Features,
  Footer,
  Tools,
};

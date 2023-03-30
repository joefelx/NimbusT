import Editor from "./Editor";
import Hero from "./Hero";
import Navigation from "./Navigation";
import LoginCard from "./LoginCard";
import Templates from "./Templates";
import Calendar from "./Calendar";
import Banner from "./Banner";
import Draft from "./Draft";
import EditorBox from "./EditorBox";
import Features from "./Features";
import Footer from "./Footer";
import Tools from "./Tools";

import { Gradient, CornerGradient, Loading, Tick, Logo } from "./Graphics";
import { CheckCircleIcon, XMarkIcon } from "react-icons/hi2";

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
  Calendar,
  Banner,
  Draft,
  EditorBox,
  Features,
  Footer,
  Tools,
};

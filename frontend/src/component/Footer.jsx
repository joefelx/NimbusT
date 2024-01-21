import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

import { ToolContext } from "../context/ToolContext";

import { BsTwitter, BsGithub } from "react-icons/bs";
import Logo from "../assets/transparentlogo2.png";

function Footer() {
  const { dispatchTool } = useContext(ToolContext);
  const router = useRouter();

  return (
    <footer className="py-10">
      <div className="flex items-center space-x-6">
        <div>
          <Image src={Logo} className="w-10" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white ">Nimbus Tweet</h1>
        </div>
      </div>
      <div className="flex space-x-6 mt-8 text-2xl text-white">
        <span className="cursor-pointer">
          <BsTwitter />
        </span>
        <span className="cursor-pointer">
          <a href="https://github.com/joefelx/NimbusT" target="_blank">
            <BsGithub />
          </a>
        </span>
      </div>
      <div className="mt-8">
        <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 lg:space-x-12 items-start md:items-center font-semibold text-base text-white ">
          <li className=" cursor-pointer">
            <a href="https://github.com/joefelx/NimbusT" target="_blank">
              Contribute
            </a>
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              dispatchTool({ type: "OPEN_EDITOR" });
              router.push("/editor");
            }}
          >
            Editor
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              dispatchTool({ type: "OPEN_TEMPLATES" });
              router.push("/editor");
            }}
          >
            Templates
          </li>
        </ul>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        Developed By{" "}
        <a href="https://github.com/joefelx" target="_blank">
          Joe Felix
        </a>
      </p>
    </footer>
  );
}

export default Footer;

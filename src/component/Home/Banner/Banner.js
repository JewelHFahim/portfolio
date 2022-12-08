import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="static ">
      <div className="text-slate-300 bottom-0 left-12 absolute flex-col justify-center items-center">
        <div className="text-2xl flex lg:block">
          <AiFillGithub className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
          <AiOutlineInstagram className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

          <FiLinkedin className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
          <FiTwitter className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
        </div>
        <p className="w-[1px] h-[120px] bg-slate-300 ml-6 hidden lg:block"></p>
      </div>

      <div className=" hidden lg:block bottom-0 right-12 absolute ">
        <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          Save Changes
        </button>
        <p className="user-email text-slate-300 m-4 hover:text-secondary">
          jewelhfahim@gmail.com
        </p>
        <p className="w-[1px] h-[120px] bg-slate-300 ml-6 hidden lg:block "></p>
      </div>
    </div>
  );
};

export default Banner;

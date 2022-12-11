import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {



  return (

    <div className="static hidden lg:block">
      <div className="text-slate-300 bottom-0 left-12 absolute flex-col justify-center items-center">

        <div className="text-2xl">

          <a href="https://github.com/JewelHFahim" target="_blank" rel="noreferrer noopener"><AiFillGithub className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." /></a>

          <a href="https://www.linkedin.com/in/jewelhfahim/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." /></a>

          <a href="https://www.facebook.com/Xewel.H.Fahim" target="_blank" rel="noreferrer noopener"><FaFacebook className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." /></a>

          <a href="https://twitter.com/jewelhfahim" target="_blank" rel="noreferrer noopener"><FiTwitter className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." /></a>

        </div>

        <p className="w-[1px] h-[120px] bg-slate-300 ml-6 hidden lg:block"></p>
      </div>

      {/* <div className=" hidden lg:block bottom-0 right-12 absolute ">
        <p className="user-email text-slate-300 m-4 hover:text-secondary">
          jewelhfahim@gmail.com
        </p>
        <p className="w-[1px] h-[120px] bg-slate-300 ml-6 hidden lg:block "></p>
      </div> */}


    </div>
    
  );
};

export default Banner;

import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="text-slate-300 mt-12 lg:hidden">
      <div className="text-2xl flex justify-center">
        <AiFillGithub className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
        <AiOutlineInstagram className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

        <FiLinkedin className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
        <FiTwitter className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />
      </div>
      <hr />
      <div className="text-center">    
      <small>Designed an created by Jewel Hossain Fahim</small>
</div>
    </div>
  );
};

export default Footer;

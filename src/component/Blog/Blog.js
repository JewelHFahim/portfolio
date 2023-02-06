import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import "./Blog.css"

export default function Blog(){


  new Typewriter("#typewriter", {
    strings: [],
    autoStart: true,
  });

  return (
    <div className="hero h-[84vh] relative">
      
      {/* <p className="text-white text-3xl"><Typewriter options={{ strings: ["Coming Soon..."], autoStart: true, loop: true, }}/> </p> */}
    
      <div class="wrapper">
      <h1>Coming Soon...</h1>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>



    <div className="text-slate-300 mt-12 mb-2 absolute w-full bottom-0">
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
    </div>
  );
};


